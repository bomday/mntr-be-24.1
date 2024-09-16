# Monitoria - Backend 2024.1

## Construção de uma API RESTful para Gerenciamento de Livraria

### Objetivo:

Desenvolver uma API RESTful para gerenciar o catálogo de uma livraria. O foco será em aplicar os conceitos de CRUD (Create, Read, Update, Delete), além de garantir a organização modular do código e uso correto de um banco de dados.

### Descrição da Tarefa:

A API deve permitir as seguintes operações:

1. **Cadastrar um livro**: Um livro deve conter título, autor, gênero, ano de publicação, e quantidade em estoque.
2. **Listar todos os livros**: A API deve retornar todos os livros cadastrados.
3. **Buscar um livro por ID**: A API deve retornar os detalhes de um livro específico usando o ID.
4. **Atualizar informações de um livro**: Permitir atualizar as informações de um livro específico (título, autor, gênero, etc.).
5. **Remover um livro**: Permitir a exclusão de um livro do catálogo usando o ID.
6. **Pesquisar por gênero**: Implementar uma funcionalidade que permita filtrar os livros pelo gênero.

### Tecnologias utilizadas:

- **Linguagem**: JavaScript
- **Framework**: Express
- **Banco de dados**: MongoDB
- **Testes**: Jest

## Estrutura 

````
src/
│
├── main/
│   ├── controllers/
│   │   └── bookController.js  # Lógica para manipulação de livros (CRUD)
│   │
│   ├── models/
│   │   └── bookModel.js       # Modelo do livro (definição do esquema do MongoDB)
│   │
│   ├── routes/
│   │   └── bookRoutes.js      # Definição das rotas da API
│   │
│   └── app.js                 # Configuração do servidor Express
└── tests/
    └── book.test.js       # Testes unitários 
package.json           # Dependências e scripts do projeto
README.md              # Instruções de uso do projeto
````

## Inicializando 

### Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas no seu computador:

1. Node.js
2. MongoDB
3. Um editor de código (ex.: VSCode)

### Rodando projeto localmente

#### 1. Clone o repositório

````
https://github.com/bomday/mntr-be-24.1
````

#### 2. Instale as dependências no diretório do projeto

````
npm install
````
````
npm install express mongoose
````
````
npm install --save-dev nodemon jest supertest
````
````
npm install dotenv
````

#### 3. Crie o arquivo _dotenv_ no mesmo local que o arquivo _package.json_

````
MONGODB_URI = URI de conexão com o MongoDB
PORT = porta de conexão
````

#### 4. Execute o projeto

````
npm start

````

## Material de Apoio

[Uma visão geral do HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)
<br>
[Métodos de requisição HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)
<br>
[O que é um servidor web (web server)?](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
<br>
[Introdução Express/Node - Aprendendo desenvolvimento web | MDN (mozilla.org)](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction)
<br>
[Node.js Por Baixo dos Panos Series' Articles - DEV Community](https://dev.to/khaosdoctor/series/2080)
<br>
[Node.js - O que é, como funciona e quais as vantagens | OPUS](https://www.opus-software.com.br/node-js/)
<br>
[O que é o Express.js? | Blog TreinaWeb](https://www.treinaweb.com.br/blog/o-que-e-o-express-js)
<br>
[Como usar o MongoDB e o Mongoose com o Node.js – melhores práticas para devs de back-end](https://www.freecodecamp.org/portuguese/news/como-usar-o-mongodb-e-o-mongoose-com-o-node-js-melhores-praticas-para-devs-de-back-end/)
<br>
[Criptografia em Node JS com Bcrypt](https://hcode.com.br/blog/criptografia-em-node-js-com-a-lib-bcrypt)
<br>
[Autenticação JSON Web Token (JWT) em Node.js](https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-nodejs/)
<br>
[Node.js](https://nodejs.org/en/)
<br>
[Fastify](https://fastify.dev)
<br>
[H3](https://h3.unjs.io/)
<br>
[Nitro](https://nitro.unjs.io/)
<br>
[Express](https://expressjs.com/pt-br/)
<br>
[MongoDB Atlas](https://www.mongodb.com/cloud/atlas/)
<br>
[Prisma](https://prisma.io/)
<br>