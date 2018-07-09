const knex = require('./../../db/databaseConfig.js');

function createPost() {
  const colorsJson = { first: "#324e80", second: "#994c15"};
  return knex.insert({
    title: 'Primer post de prueba',
    body: "Body del primer post de prueba",
    image: "https://res.cloudinary.com/vincent1bt/image/upload/v1530231133/lamp-3489395_1280_kpa1u4.jpg",
    colors: JSON.stringify(colorsJson),
  }).into('posts');
}

function getPost(id) {
  return knex('posts').where('id', id);
}

module.exports = {
  createPost,
  getPost,
}
