const express = require('express')
const movieRouter =express.Router()
const uuid = require("uuid/v4")

// fake movie data //
const movies = [
    {title: "die hard", genre: "action", _id: uuid()},
    {title: "star wars", genre: "fantasy", _id: uuid()},
    {title: "lord of the rings", genre: "fantasy", _id: uuid()},
    {title: "marriage story", genre: "drama", _id: uuid()}
]

// Routes // 


// GET All
movieRouter.get("/", (req, res) => {
    res.send(movies)
})

// GET One
movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

// GET by genre
movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

// POST One
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuid()
    movies.push(newMovie)
    res.send(`Successfully added '${newMovie.title}' to the database`)
})

// DELETE One
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("successfully deleted movie from database")
})

// movieRouter.route("/")
//     .get((req, res) => {
//         res.send(movies)
//     })
//     .post((req, res) => {
//         const newMovie = req.body
//         newMovie._id = uuid()
//         movies.push(newMovie)
//         res.send(`successsfully added '${newMovie.title}' to the database`)
//     })


module.exports = movieRouter