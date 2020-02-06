const mongoose = require('mongoose')
const Schema = mongoose.Schema

// model
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    genre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Book", bookSchema)