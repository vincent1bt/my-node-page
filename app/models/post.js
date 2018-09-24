const urlSlug = require('url-slug');
const knex = require('./../db/databaseConfig.js');

function createPost(post, colors, date) {
  const { title } = post;
  const timestamp = date ? new Date(date) : knex.fn.now();
  const titleSluged = urlSlug(title);

  return knex.insert({
    ...post,
    slug: titleSluged,
    colors: JSON.stringify(colors),
    created_at: timestamp,
  }, 'id').into('posts');
}

function updatePost(id, post, colors ) {
  const slug = urlSlug(post.title);
  const timestamp = knex.fn.now();

  const postWithSlug = {
    ...post,
    updated_at: timestamp,
    slug,
  };

  return knex('posts').where('id', id).update({
    ...postWithSlug,
    colors: JSON.stringify(colors),
  });
}

function deleteFromPost(id) {
  return knex('posts').where('id', id).limit(1).del();
}

function getPostById(id) {
  return knex.from('posts').where('id', id).limit(1);
}

function getPostBySlug(slug) {
  return knex.from('posts').where('slug', slug).limit(1);
}

function getPost(id) {
  if (isNaN(id)) return getPostBySlug(id);
  return getPostById(id);
}

function getPostsByPage(page = 0) {
  const limit = 5;
  const offset = page * limit;
  return knex.select(['title', 'slug', 'id', 'created_at', 'colors', 'description'])
    .from('posts')
    .limit(limit)
    .offset(offset)
    .orderBy("created_at", 'desc');
}

function getPosts() {
  return knex.select(['title', 'id']).from('posts')
    .orderBy("updated_at", 'desc');
}

function countPosts() {
  return knex('posts').count('id');
}

function searchPosts(term) {
  return knex.schema.raw(`SELECT title, created_at, slug, colors FROM posts WHERE to_tsvector(unaccent(lower(title))) @@ plainto_tsquery('${term}')`);
}

module.exports = {
  createPost,
  countPosts,
  getPost,
  getPosts,
  getPostsByPage,
  updatePost,
  deleteFromPost,
  searchPosts,
};
