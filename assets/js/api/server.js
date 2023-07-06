const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const fs = require('fs');

const app = express();
app.use(cors())

const dbConfig = {
  host: 'apiestoque.mysql.database.azure.com',
  user: `user_github`,
  password: `githubuser123`,
  database: 'estoque',
  ssl: {
    cert: fs.readFileSync('C:/Users/guilh/Downloads/DigiCertGlobalRootCA.crt.pem')
  }
};

// Criar uma conexão com o banco de dados MySQL
const connection = mysql.createConnection(dbConfig);

// Conectar-se ao banco de dados
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida com o banco de dados MySQL');
});

// Rotas do aplicativo
app.get('/', (req, res) => {
  // Executar uma consulta no banco de dados
  connection.query('SELECT * FROM Produtos', (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).send('Erro no servidor');
      return;
    }
    // Enviar os resultados da consulta como resposta
    res.json(results);
  });
});

module.exports = app;