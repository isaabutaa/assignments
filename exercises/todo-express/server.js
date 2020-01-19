const express = require("express")
const app = express()

app.use(express.json())

app.use("/todos", require("./todoRouter"))

app.listen(4005, () => console.log("server is running on port 4005"))