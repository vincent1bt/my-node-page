const knex = require('./../../db/databaseConfig.js');

function shouldUpdateCategories(categoriesArray) {
  return categoriesArray.length > 0;
}

function savePostCategories(postId, categories) {
  const categoriesArray = typeof categories === "string" ? Array.from(categories) : categories;
  const categoriesQueries = categoriesArray.map(category => ({ post_id: postId, category_id: category }));
  return knex.insert(categoriesQueries).into('post_categories');
}

function deletePostCategories(id) {
  return knex('post_categories').where('post_categories.post_id', id).del();
}

function deleteCategoryPosts(id) {
  return knex('post_categories').where('post_categories.category_id', id).del();
}

function updatePostCategories(id, categories = []) {
  const categoriesArray = Array.from(categories);
  if (shouldUpdateCategories(categoriesArray)) {
    return Promise.all([deletePostCategories(id), savePostCategories(id, categoriesArray)]);
  }
  return Promise.resolve();
}

function getPostCategories(id) {
  return knex.select('categories.id', 'categories.name')
    .from('post_categories')
    .where('post_categories.post_id', id)
    .join('categories', 'post_categories.category_id', '=', 'categories.id');
}

function getCategoryPosts(id, lang='en') {
  return knex.select('posts.id', 'posts.slug', 'posts.title', 'posts.created_at', 'posts.colors')
    .from('post_categories')
    .where('post_categories.category_id', id)
    .andWhere('posts.lang', lang)
    .join('posts', 'post_categories.post_id', '=', 'posts.id')
    .orderBy("created_at", 'desc');
}

module.exports = {
  savePostCategories,
  updatePostCategories,
  deletePostCategories,
  deleteCategoryPosts,
  getPostCategories,
  getCategoryPosts,
};
