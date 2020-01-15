const express = require("express")
const tvShowRouter = express.Router()
const uuid = require("uuid")

//fake tv show data //
const tvShows = [
    {title: "Vikings", genre: "action", _id: uuid()},
    {title: "My Hero Academia", genre: "anime", _id: uuid()},
    {title: "Megalo Box", genre: "anime", _id: uuid()},
    {title: "Ramy", genre: "comedy", _id: uuid()},
]

//Routes

//GET All
tvShowRouter.get("/", (req, res) => {
    res.send(tvShows)
})

// GET One
tvShowRouter.get("/:showId", (req, res) => {
    const showId = req.params.showId
    const foundShow = tvShows.find(show => show._id === showId)
    res.send(foundShow)
})

// GET by genre
tvShowRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredShows = tvShows.filter(show => show.genre === genre)
    res.send(filteredShows)
})

// POST One
tvShowRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuid()
    tvShows.push(newShow)
    res.send(`successfully added '${newShow.title}' to the database.`) 
})

// DELETE One 
tvShowRouter.delete("/:showId", (req, res) => {
    const showId = req.params.showId
    const showIndex = tvShows.findIndex(show => show._id === showId)
    tvShows.splice(showIndex, 1)
    res.send("successfully deleted show from database")
})

// PUT/Update One
tvShowRouter.put("/:showId", (req, res) => {
    const newObj = req.body
    const showId = req.params.showId
    const showIndex = tvShows.findIndex(show => show._id === showId)
    const updateShow = Object.assign(tvShows[showIndex], newObj)
    res.send(updateShow)
})

// tvShowRouter.route("/")
//     .get((req, res) => {
//         res.send(tvShows)
//     })
//     .post((req, res) => {
//         const newTvShow = req.body
//         newTvShow._id = uuid()
//         tvShows.push(newTvShow)
//         res.send(`successfully added '${newTvShow.title}' to the database.`)
//     })

module.exports = tvShowRouter