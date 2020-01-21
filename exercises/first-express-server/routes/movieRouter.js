const express = require('express')
const movieRouter = express.Router()
const Movie = require("../models/movie.js")

// Routes // 

// GET All
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

// POST One
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(savedMovie)
    })
})

// DELETE One
movieRouter.delete("/:movieId", (req, res, next) => {
    Movie.findOneAndDelete({ _id: req.params.movieId }, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.title} from the database.`)
    })
})

// UPDATE/PUT One
movieRouter.put("/:movieId", (req, res, next) => {
    Movie.findOneAndUpdate(
        { _id: req.params.movieId}, // find this one to update
        req.body, // update the object with this data
        { new: true }, // send back the updated object
        (err, updatedMovie) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            res.status(200).send(updatedMovie)
        }
    )
})

// GET One
// movieRouter.get("/:movieId", (req, res, next) => {
//     const movieId = req.params.movieId
//     const foundMovie = movies.find(movie => movie._id === movieId)
//     if(!foundMovie) {
//         const err = new Error (`Could not find the movie with this id: ${movieId}`)
//         res.status(500)
//         return next(err)
//     }
//     res.status(200).send(foundMovie)
// })

// GET by genre
movieRouter.get("/search/genre", (req, res, next) => {
    Movie.find({ genre: req.query.genre }, (err, movies) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(movies)
    })
})


module.exports = movieRouter