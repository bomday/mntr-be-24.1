const request = require('supertest')
const app = require('../main/app')
const mongoose = require('mongoose')
const Book = require('../main/models/bookModel')

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('Book API', () => {
  // Cenários Positivos

  // Teste: Cadastrar um livro
  it('should create a new book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({
        title: 'Test Book',
        author: 'John Doe',
        genre: 'Fiction',
        publicationYear: 2023,
        stock: 10,
      });
    
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');

    await request(app).delete(`/api/books/${res.body._id}`);
  });

  // Teste: Listar todos os livros
  it('should return all books', async () => {
    const res = await request(app).get('/api/books');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Teste: Buscar um livro por ID
  it('should return a book by ID', async () => {
    const book = new Book({
      title: 'Book to Find',
      author: 'Jane Doe',
      genre: 'Science Fiction',
      publicationYear: 2022,
      stock: 5,
    });
    await book.save();
    const res = await request(app).get(`/api/books/${book._id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Book to Find');

    await request(app).delete(`/api/books/${book._id}`);
  });

  // Teste: Atualizar informações de um livro
  it('should update a book', async () => {
    const book = new Book({
      title: 'Book to Update',
      author: 'Jane Doe',
      genre: 'Science Fiction',
      publicationYear: 2021,
      stock: 4,
    });
    await book.save();
    const res = await request(app)
      .put(`/api/books/${book._id}`)
      .send({
        title: 'Updated Book',
        stock: 6,
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated Book');
    expect(res.body.stock).toBe(6);

    await request(app).delete(`/api/books/${book._id}`);
  });

  // Teste: Remover um livro
  it('should delete a book', async () => {
    const book = new Book({
      title: 'Book to Delete',
      author: 'Mark Twain',
      genre: 'Classics',
      publicationYear: 1876,
      stock: 2,
    });
    await book.save();
    const res = await request(app).delete(`/api/books/${book._id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Book deleted successfully');
  });

  // Teste: Pesquisar por gênero
  it('should return books by genre', async () => {
    const book1 = new Book({
      title: 'Fantasy Book 1',
      author: 'Author A',
      genre: 'Fantasy',
      publicationYear: 2020,
      stock: 3,
    });
    const book2 = new Book({
      title: 'Fantasy Book 2',
      author: 'Author B',
      genre: 'Fantasy',
      publicationYear: 2019,
      stock: 7,
    });
    await book1.save();
    await book2.save();

    const res = await request(app).get('/api/books/genre/Fantasy');
    
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    expect(res.body[0].genre).toBe('Fantasy');

    await request(app).delete(`/api/books/${book1._id}`);
    await request(app).delete(`/api/books/${book2._id}`);
  });

  // Cenários Negativos

  // Teste: Cadastrar um livro com dados inválidos
  it('should return a 400 error for invalid book data', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({
        // Dados inválidos (faltando título e autor)
        genre: 'Fiction',
        publicationYear: 2023,
        stock: 10,
      });
    
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  // Teste: Buscar um livro com ID inválido
  it('should return a 404 error for a non-existing book ID', async () => {
    const invalidId = '60c72b2f4f1c4f001c8b4567'; 
    const res = await request(app).get(`/api/books/${invalidId}`);

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBeDefined();
  });

  // Teste: Atualizar um livro com ID inválido
  it('should return a 404 error when updating a non-existing book ID', async () => {
    const invalidId = '60c72b2f4f1c4f001c8b4567'; 
    const res = await request(app)
      .put(`/api/books/${invalidId}`)
      .send({
        title: 'Updated Book',
        stock: 6,
      });

      expect(res.statusCode).toBe(404);
      expect(res.body.error).toBeDefined();
  });

  // Teste: Excluir um livro com ID inválido
  it('should return a 404 error when deleting a non-existing book ID', async () => {
    const invalidId = '60c72b2f4f1c4f001c8b4567'; 
    const res = await request(app).delete(`/api/books/${invalidId}`);

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBeDefined();
  });

  // Teste: Pesquisar por gênero não existente
  it('should return an empty body response when searching for a non-existent book genre', async () => {
    const res = await request(app).get('/api/books/genre/Drama');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(0);
  });
});