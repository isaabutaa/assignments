// const express = require("express")
// const app = express()

// fakeData
const manPeople = [
    {name: "mike", age: 20},
    {name: "mo", age: 21},
    {name: "matt", age: 22}, 
    {name: "moses", age: 23},
    {name: "ming", age: 24}
]

const womanPeople = [
    {name: "mary", age: 20},
    {name: "martha", age: 21},
    {name: "michelle", age: 22},
    {name: "miranda", age: 23},
    {name: "memphis", age: 24},
]

// app.get("/users", (req, res) => {
//     res.send(people)
// })


// app.listen(9000, () => console.log("the server is running on port 9000"))

const express = require("express")
const app = express()

app.get("/all-people", (request, response) => response.send([...manPeople, ...womanPeople]))

app.listen(9000, () => console.log("server is running on port 9000"))