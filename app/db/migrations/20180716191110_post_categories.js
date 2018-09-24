
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post_categories', (table) => {
    table.increments();
    table.integer('post_id').unsigned().notNullable();
    table.integer('category_id').unsigned().notNullable();

    table.foreign('post_id').references('id').inTable('posts');
    table.foreign('category_id').references('id').inTable('categories');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post_categories');
};
