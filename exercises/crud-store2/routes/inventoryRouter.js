const express = require('express')
const inventoryRouter = express.Router()
const Item = require('../models/inventoryItem.js')

// routes

// GET all
inventoryRouter.get("/", (req, res, next) => {
    Item.find((err, items) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

// GET one
inventoryRouter.get("/:itemId", (req, res, next) => {
    Item.findOne(
        { _id: req.params.itemId },
        (err, item) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(item)
        }
    )
})

// POST
inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Item(req.body)
    newItem.save((err, savedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

// DELETE one
inventoryRouter.delete("/:itemId", (req, res, next) => {
    Item.findOneAndDelete({ _id: req.params.itemId }, 
        (err, deletedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedItem.name} from the inventory`)
        }
    )
})

// PUT
inventoryRouter.put("/:itemId", (req, res, next) => {
    Item.findOneAndUpdate(
        { _id: req.params.itemId },
        req.body,
        { new: true },
        (err, updatedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

module.exports = inventoryRouter 