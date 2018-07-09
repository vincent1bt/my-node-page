const express = require('express');
const { createPost, getPost } = require('./models/post');

const app = express();

app.get('/', (request, response) => {
  response.send('all works');
});

app.get('/post', async (request, response) => {
  try {
    const [data] = await getPost(1);
    console.log(data);

    response.send(`
      <style>
        body {
          background-image: linear-gradient(120deg, ${data.colors.first}, ${data.colors.second});
        }
      </style>

      <body >
        <h1>${data.title}</h1>
        <p>${data.title}</p>
        <img src='${data.image}'/>
      </body>`
    );

  } catch (error) {
    console.error(error);
  }
});

module.exports = app;
