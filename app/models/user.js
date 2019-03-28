const knex = require('./../../db/databaseConfig.js');

function findUser(username) {
  return knex.from('users').where('username', username).limit(1);
}

function createUser(username, password) {
  return knex.insert({username, password}).into('users');
}

module.exports = {
  findUser,
  createUser,
}
