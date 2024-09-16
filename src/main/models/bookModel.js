// Como as informações sobre os livros serão armazenadas no banco de dados
const mongoose = require('mongoose')

const bookData = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  publicationYear: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  }
});

const Book = mongoose.model('Book', bookData)
module.exports = Book