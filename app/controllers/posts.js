const { getCategories } = require('./../models/category');
const { errorInApp } = require('./../utils/error.js');

const {
  getPostsByPage,
  countPosts,
  createPost,
  getPost,
  updatePost,
  deleteFromPost,
  searchPosts,
} = require('./../models/post');

const {
  savePostCategories,
  updatePostCategories,
  getPostCategories,
  deletePostCategories,
} = require('./../models/postCategories');

async function index(request, response, next) {
  try {
    const { page } = request.query;
    const posts = await getPostsByPage(page);
    const [{ count }] = await countPosts();
    const limit = 5;
    const pagination = Math.ceil(count / limit) - 1;
    request.posts = posts;
    request.count = pagination < 0 ? 0 : pagination;
    next();

  } catch (serverError) {
    console.log(serverError, 'Error on index request');

    const error = errorInApp("Error on index request");
    request.flash('error', serverError);
    response.redirect('/admin');
  }
}

async function show(request, response, next) {
  try {
    const { id: paramId } = request.params;
    const [post] = await getPost(paramId);
    const { id: postId } = post;
    const categories = await getPostCategories(postId);

    const postObject = {
      categories,
      post,
    };
    request.postObject = postObject;
    next();

  } catch (serverError) {
    console.log(serverError, 'Error on show(posts) request');

    const error = errorInApp("Error on show view(post)");
    request.flash('error', serverError);
    response.redirect('/admin');
  }
}

async function newPost(request, response, next) {
  try {
    const queries = ['id', 'name'];
    const categories = await getCategories(queries);
    request.categories = categories;
    next();
  } catch (serverError) {
    console.log(serverError, 'Error on create request');

    const error = errorInApp("Error on new view", serverError);
    request.flash('error', error);
    response.redirect('/admin');
  }
}

async function create(request, response, next) {
  try {
    const { post, colors, categories, date} = request.body;
    const [postId] = await createPost(post, colors, date);
    await savePostCategories(postId, categories);
    request.postId = postId;
    next();

  } catch (serverError) {
    console.log(serverError, 'Error on create(posts) request');

    const error = errorInApp("Error on create post", serverError);
    request.flash('error', serverError);
    response.redirect('/posts/new');
  }
}

async function edit(request, response, next) {
  try {
    const { id } = request.params;
    const [post] = await getPost(id);
    const queries = ['id', 'name'];
    const categories = await getCategories(queries);
    request.categories = categories;
    request.post = post;
    next();
  } catch (serverError) {
    console.log(serverError, 'Error on edit(posts) request');

    const error = errorInApp("Error on edit view", serverError);
    request.flash('error', error);
    response.redirect('/admin');
  }
}

async function update(request, response, next) {
  try {
    const { id, post, colors, categories} = request.body;
    await updatePost(id, post, colors);
    await updatePostCategories(id, categories);
    next();

  } catch (serverError) {
    console.log(serverError, 'Error on update(post) request');

    const error = errorInApp("Error updating the post", serverError);
    const { id } = request.body;

    request.flash('error', error);
    response.redirect(301, `/posts/edit/${id}`);
  }
}

async function deletePost(request, response, next) {
  try {
    const { id } = request.body;
    await deletePostCategories(id);
    await deleteFromPost(id);
    next();
  } catch (serverError) {
    console.log(serverError, 'Error on delete(posts) request');

    const error = errorInApp("Error on delete post", serverError);
    request.flash('error', error);
    response.redirect('/admin');
  }
}

async function search(request, response, next) {
  try {
    const { term } = request.query;
    const { rows } = await searchPosts(term);
    request.posts = rows;
    next();

  } catch (serverError) {
    console.error(serverError, 'Error on search(posts) request');

    const error = errorInApp("Error on search posts", serverError);
    request.flash('error', error);
    response.redirect('/admin');
  }
}

module.exports = {
  index,
  create,
  show,
  newPost,
  update,
  edit,
  deletePost,
  search,
};
