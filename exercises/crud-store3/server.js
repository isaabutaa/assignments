const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = 9000

// middleware
app.use(express.json())
app.use(morgan('dev'))

// connect to DB
mongoose.connect("mongodb://localhost:27017/bookstoreDB", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to DB")
)

// routes
app.use("/books", require("./routes/bookRouter.js"))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))