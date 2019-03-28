const knex = require('./../../db/databaseConfig.js');

function createCategory(name, description, colors) {
  return knex.insert({
    name,
    description,
    colors: JSON.stringify(colors),
  }).into('categories');
}

function updateCategory(id, name, description, colors ) {
  return knex('categories').where('id', id).update({
    name,
    description,
    colors: JSON.stringify(colors),
  });
}

function deleteCategory(id) {
  return knex('categories').where('id', id).limit(1).del();
}

function getAllCategories(query = ['id', 'name', 'colors']) {
  return knex.select(query).table('categories');
}

function getCategory(id) {
  return knex.from('categories').where('id', id).limit(1);
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
