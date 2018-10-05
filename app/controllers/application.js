const { getAllPosts } = require('./../models/post');
const { getAllCategories } = require('./../models/category');
const { handleError } = require('./../utils/error.js');

async function admin(request, response, next) {
  try {
    const posts = await getAllPosts();
    const categories = await getAllCategories(['name', 'id']);
    request.posts = posts;
    request.categories = categories;
    next();
  } catch (serverError) {
    handleError(response, request, serverError);
  }
}

module.exports = {
  admin,
};
