const express = require("express")
const fruitRouter = express.Router()

const fruitData = [
    {
        type: "banana",
        price: .89
    },
    {
        type: "apple",
        price: .99
    },
    {
        type: "jack fruit",
        price: 6.35
    },
    {
        type: "durian",
        price: 7.00
    },
    {
        type: "mango",
        price: 1.50
    },
    {
        type: "pineapple",
        price: 1.50
    },
    {
        type: "orange",
        price: .50
    },
    {
        type: "rambutan",
        price: 2.00
    },
    {
        type: "honeydew melon",
        price: 1.00
    },
]

//get all
fruitRouter.get("/", (req, res) => {
    res.send(fruitData)
})

//get by type
fruitRouter.get("/type", (req, res) => {
    const type = req.query.type
    const filteredFruit = fruitData.filter(fruit => fruit.type === type)
    res.send(filteredFruit)
})

//get by price
fruitRouter.get("/price", (req, res) => {
    const price = req.query.price
    const filteredPrice = fruitData.filter(fruit => fruit.price <= price)
    res.send(filteredPrice)
})

module.exports = fruitRouter