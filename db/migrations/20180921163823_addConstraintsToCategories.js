exports.up = function(knex, Promise) {
  return knex.schema.table('categories', (table) => {
    table.unique(['name', 'description']);
  });
};

exports.down = function(knex, Promise) {

};
