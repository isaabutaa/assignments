const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Middleware
app.use(express.json())
app.use(morgan("dev"))

// Connect to DB
mongoose.connect("mongodb://localhost:27017/crudStoreDB",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to DB")
)

// Routes
app.use("/inventory", require("./routes/inventoryRouter"))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errorMsg: err.message})
})


app.listen(8500, () => console.log("Server is running on Port 8500"))