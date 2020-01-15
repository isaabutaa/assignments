const express = require("express")
const app = express()

//Middleware - a function that fires on the in-between //
app.use(express.json()) // looks for a request body, and turns it into 'req.body'

// Routes //
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvShowRouter"))

app.listen(9000, () => console.log("server is running on port 9000"))