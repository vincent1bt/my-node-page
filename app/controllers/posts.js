const { getAllCategories } = require('./../models/category');
const {
  getPostsByPage,
  countPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
  searchPosts,
} = require('./../models/post');
const {
  savePostCategories,
  updatePostCategories,
  getPostCategories,
  deletePostCategories,
} = require('./../models/postCategories');
const { handleError } = require('./../utils/error.js');

async function index(request, response, next) {
  try {
    const { page } = request.query;
    //check if i can get the count in the above query
    const posts = await getPostsByPage(page);
    const [{ count }] = await countPosts();
    const limit = 5;
    const pagination = Math.ceil(count / limit) - 1;
    request.posts = posts;
    request.count = pagination < 0 ? 0 : pagination;
    next();

  } catch (serverError) {
    handleError(response, request, serverError);
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
    handleError(response, request, serverError);
  }
}

async function newPost(request, response, next) {
  try {
    const queries = ['id', 'name'];
    const categories = await getAllCategories(queries);
    request.categories = categories;
    next();

  } catch (serverError) {
    handleError(response, request, serverError);
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
    handleError(response, request, serverError);
  }
}

async function edit(request, response, next) {
  try {
    const { id } = request.params;
    const [post] = await getPost(id);
    const queries = ['id', 'name'];
    const categories = await getAllCategories(queries);
    request.categories = categories;
    request.post = post;
    next();

  } catch (serverError) {
    handleError(response, request, serverError);
  }
}

async function update(request, response, next) {
  try {
    const { id, post, colors, categories} = request.body;
    await updatePost(id, post, colors);
    await updatePostCategories(id, categories);
    next();

  } catch (serverError) {
    handleError(response, request, serverError);
  }
}

async function destroy(request, response, next) {
  try {
    const { id } = request.body;
    await deletePostCategories(id);
    await deletePost(id);
    next();

  } catch (serverError) {
    handleError(response, request, serverError);
  }
}

async function search(request, response, next) {
  try {
    const { term } = request.query;
    const { rows } = await searchPosts(term);
    request.posts = rows;
    next();

  } catch (serverError) {
    handleError(response, request, serverError);
  }
}

module.exports = {
  index,
  create,
  show,
  newPost,
  update,
  edit,
  destroy,
  search,
};
