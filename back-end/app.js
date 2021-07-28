const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Configurando mecanismos para ler solicitações de entrada em json
app.use(express.json());

// Setando CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, DELETE, PATCH, PUT'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
});

// Setando rotas
const publicationRoutes = require('./routes/publication');
app.use(publicationRoutes);

// Setando middleware de gerenciamento de erros
app.use(( error, req, res, next ) => {

    console.log(error);

    const errorStatusCode = error.statusCode || 500;
    const errorMessage = error.message

    res.status(errorStatusCode).json({
        message: errorMessage
    });

})


const port = 8080;

mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( () => {
    app.listen(port, () => {
        console.info(`A aplicação está rodando em: http://localhost:${8080}`);
    });
})
.catch( err => {
    console.log(err);
})
