exports.up = function(knex, Promise) {
  return knex.schema.table('categories', (table) => {
    table.text('description');
  });
};

exports.down = function(knex, Promise) {

};
