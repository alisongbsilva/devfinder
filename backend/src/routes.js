const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteraçãp ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

routes.post('/devs', async (request, response) => {
    const { github_username, techs, latitude, longitude } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    let { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    }

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
    })

    console.log(name, github_username, avatar_url, bio, techs, location);
    
    return response.json(dev);   
});

module.exports = routes; 