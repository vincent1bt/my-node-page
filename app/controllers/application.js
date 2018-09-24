const { getPosts } = require('./../models/post');
const { getCategories } = require('./../models/category');
const { errorInApp } = require('./../utils/error.js');

async function admin(request, response, next) {
  try {
    const posts = await getPosts();
    const categories = await getCategories(['name', 'id']);
    request.posts = posts;
    request.categories = categories;
    next();
  } catch (serverError) {
    console.log(serverError, 'Error on Admin request');

    const error = errorInApp("Error on admin", serverError);
    request.flash('error', error);
    response.redirect('/admin');
  }
}

module.exports = {
  admin,
};
