const express = require("express")
const testMiddleware = express.Router()



testMiddleware.get("/", (req, res, next) => {
    console.log("MIDDLEWARE EXECUTED")
    req.body = {
        cats: 6,
        catNames: [
            {name: "Thor"}, 
            {name: "Luna"},
            {name: "Hero McPhee"},
            {name: "Romeo"},
            {name: "Aspen"},
            {name: "Cherry Lou"}
        ]
    }
    res.send(req.body)
})

module.exports = testMiddleware