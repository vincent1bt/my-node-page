
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username');
    table.string('password');

    table.unique('username');
    table.index('username');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
