const express = require('express')
const candyRouter = express.Router()
const Candy = require('../models/candy.js')

// routes

// GET all
candyRouter.get('/', (req, res, next) => {
    Candy.find((err, candy) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(candy)
    })
})

// GET one
candyRouter.get("/:candyId", (req, res, next) => {
    Candy.findOne(
        { _id: req.params.candyId },
        (err, candy) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(candy)
        }
    )
})

// POST
candyRouter.post('/', (req, res, next) => {
    const newCandy = new Candy(req.body)
    newCandy.save((err, newItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newItem)
    })
})

// PUT
candyRouter.put('/:candyId', (req, res, next) => {
    Candy.findOneAndUpdate(
        { _id: req.params.candyId },
        req.body,
        { new: true },
        (err, updatedCandy) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedCandy)
        }
    )
})

// DELETE
candyRouter.delete('/:candyId', (req, res, next) => {
    Candy.findOneAndDelete(
        { _id: req.params.candyId },
        (err, deletedCandy) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedCandy.name}`)
        }
    )
})

module.exports = candyRouter