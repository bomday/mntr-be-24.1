const express = require('express')
const mongoose = require('mongoose')
const bookRoutes = require('./routes/bookRoutes')
require('dotenv').config()

const app = express()

// Middleware para interpretar JSON
app.use(express.json())

// Conectar ao MongoDB 
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))

// Define um "prefixo" para as rotas
app.use('/api', bookRoutes);

// Iniciar o servidor
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// Exporta o app para testes 
module.exports = app