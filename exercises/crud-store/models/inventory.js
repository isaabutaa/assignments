const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Inventory Blueprint

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String, 
        required: true
    },
    expirationDate: String
})

module.exports = mongoose.model("Inventory", inventorySchema)