const express = require("express")
const todoRouter = express.Router()
const todos = require("./todos")
const uuid = require("uuid")

//ROUTES//

//get all todos
todoRouter.get("/", (req, res) => {
    res.send(todos)
})

//get one todo by Id
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

//delete todo by Id
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("successfully deleted todo")
})

//add new todo
todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(`successfully added ${newTodo.name} to todos`)
})

//update todo
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updatedTodo = req.body
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const newTodo = Object.assign(todos[todoIndex], updatedTodo)
    res.send(newTodo)
})

module.exports = todoRouter