const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const PORT = 9000

//Middleware - a function that fires on the in-between //
app.use(express.json()) // looks for a request body, and turns it into 'req.body'
app.use(morgan("dev"))

// Connect to DB                            name of database
mongoose.connect("mongodb://localhost:27017/moviesdb", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

// Routes //
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvShowRouter"))
app.use("/fruits", require("./routes/fruitRouter"))
app.use("/test", require("./routes/testMiddleware"))

// Error handler //
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errorMsg: err.message})
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))