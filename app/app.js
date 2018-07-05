const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('all works');
});

module.exports = app;
