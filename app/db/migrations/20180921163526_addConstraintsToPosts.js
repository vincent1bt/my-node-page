exports.up = function(knex, Promise) {
  return knex.schema.table('posts', (table) => {
    table.unique(['title', 'image', 'description']);
  });
};

exports.down = function(knex, Promise) {

};
