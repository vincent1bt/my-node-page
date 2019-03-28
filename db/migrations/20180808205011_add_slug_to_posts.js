
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', (table) => {
    table.string('slug');
    table.index('slug');
  });
};

exports.down = function(knex, Promise) {

};
