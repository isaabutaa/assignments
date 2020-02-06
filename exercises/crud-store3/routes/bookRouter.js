const express = require('express')
const Book = require('../models/book.js')
const bookRouter = express.Router()

// routes

// GET all
bookRouter.get("/", (req, res, next) => {
    Book.find((err, books) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

// GET one by id
bookRouter.get("/:bookId", (req, res, next) => {
    Book.findOne(
        { _id: req.params.bookId },
        (err, book) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(book)
        }
    )
})

// POST
bookRouter.post("/", (req, res, next) => {
    const newBook = new Book(req.body)
    newBook.save((err, book) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(book)
    })
})

// PUT
bookRouter.put("/:bookId", (req, res, next) => {
    Book.findOneAndUpdate(
        { _id: req.params.bookId },
        req.body,
        { new: true },
        (err, updatedBook) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBook)
        }
    )
})

// DELETE
bookRouter.delete("/:bookId", (req, res, next) => {
    Book.findOneAndDelete(
        { _id: req.params.bookId },
        (err, deletedBook) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedBook.title} from the database`)
        }
    )
})

module.exports = bookRouter