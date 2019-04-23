
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', (table) => {
    table.string('lang');
    table.index('lang');
  });
};

exports.down = function(knex, Promise) {
  
};
