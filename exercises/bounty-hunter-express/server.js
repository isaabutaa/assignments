const express = require("express")
const app = express()

//middleware
app.use(express.json())

// routes
app.use("/bounties", require("./routes/bountyRouter"))

app.listen(8099, () => console.log("Server is running on port 8099"))