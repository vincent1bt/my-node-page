const express = require('express');
const projectsRouter = express.Router({ mergeParams: true });
const path = require('path');

const alzheimerProjectRoute = path.resolve(__dirname + '/../views/projects/alzheimer.html'); 

projectsRouter.get('/alzheimer', (request, response) => {
    response.sendFile(alzheimerProjectRoute);
});

module.exports = projectsRouter;