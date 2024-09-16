const Book = require('../models/bookModel')

// Criar um novo livro
exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body)
    await book.save()
    res.status(201).json(book)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

// Listar todos os livros
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

// Buscar livro por ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
    if (!book) return res.status(404).json({ error: 'Book not found' })
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

// Atualizar informações do livro
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!book) return res.status(404).json({ error: 'Book not found' })
    res.status(200).json(book)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

// Remover livro
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id)
    if (!book) return res.status(404).json({ error: 'Book not found' })
    res.status(200).json({ message: 'Book deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

// Pesquisar por gênero
exports.getBooksByGenre = async (req, res) => {
  try {
    const books = await Book.find({ genre: req.params.genre })
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};