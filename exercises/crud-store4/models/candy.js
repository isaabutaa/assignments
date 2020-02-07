const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Candy', candySchema)