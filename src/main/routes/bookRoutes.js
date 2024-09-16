const express = require('express')
const bookRoutes = express.Router()
const bookController = require('../controllers/bookController')

bookRoutes.post('/books', bookController.createBook)
bookRoutes.get('/books', bookController.getAllBooks)
bookRoutes.get('/books/:id', bookController.getBookById)
bookRoutes.put('/books/:id', bookController.updateBook)
bookRoutes.delete('/books/:id', bookController.deleteBook)
bookRoutes.get('/books/genre/:genre', bookController.getBooksByGenre)

module.exports = bookRoutes