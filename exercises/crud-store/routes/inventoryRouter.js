const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory")

// Routes

// GET
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, inventoryItems) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventoryItems)
    })
})

// POST
inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

// PUT
inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        { _id: req.params.inventoryId }, // find this one to update
        req.body, // update the object with this data
        { new: true }, // send back the updated object
        (err, updatedInventory) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            res.status(202).send(updatedInventory)
        }
    )
})

//DELETE
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete(
        { _id: req.params.inventoryId },
        (err, deletedInventory) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            res.status(200).send(`Successfully deleted ${deletedInventory.name} from the inventory.`)
        }
    )
})



module.exports = inventoryRouter