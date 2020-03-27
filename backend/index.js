const express = require('express');

const app = express();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params:
// Body:

app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({message: 'Hey boy!'});
});

app.listen(3333);