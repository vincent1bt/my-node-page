const knex = require('./../db/databaseConfig.js');

function savePostCategories(postId, categories) {
  const arrayCategories = Array.from(categories);
  const categoriesQueries = arrayCategories.map(category => ({ post_id: postId, category_id: category }));
  return knex.insert(categoriesQueries).into('post_categories');
}

function deletePostCategories(id) {
  return knex('post_categories').where('post_categories.post_id', id).del();
}

function deleteCategoryRelations(id) {
  return knex('post_categories').where('post_categories.category_id', id).del();
}

function updatePostCategories(id, categories) {
  if (!categories) return Promise.resolve();
  return Promise.all([deletePostCategories(id), savePostCategories(id, categories)]);
}

function getPostCategories(id) {
  return knex.select('categories.id', 'categories.name')
    .from('post_categories')
    .where('post_categories.post_id', id)
    .join('categories', 'post_categories.category_id', '=', 'categories.id');
}

function getCategoryPosts(id) {
  return knex.select('posts.id', 'posts.slug', 'posts.title', 'posts.created_at', 'posts.colors')
    .from('post_categories')
    .where('post_categories.category_id', id)
    .join('posts', 'post_categories.post_id', '=', 'posts.id')
    .orderBy("created_at", 'desc');
}

module.exports = {
  savePostCategories,
  updatePostCategories,
  deletePostCategories,
  deleteCategoryRelations,
  getPostCategories,
  getCategoryPosts,
};
