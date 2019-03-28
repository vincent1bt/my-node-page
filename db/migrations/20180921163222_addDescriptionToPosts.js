exports.up = function(knex, Promise) {
  return knex.schema.table('posts', (table) => {
    table.text('description');
  });
};

exports.down = function(knex, Promise) {

};
