const {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require('./../models/category');
const { getCategoryPosts, deleteCategoryPosts } = require('./../models/postCategories');
const { handleError } = require('./../utils/error.js');

async function index(request, response, next) {
  try {
    const categories = await getAllCategories();
    request.categories = categories;
    next();

  } catch (serverError) {
    handleError(response, request, serverError);
  }
}

async function create(request, response, next) {
  try {
    const { name, description, colors } = request.body;
    await createCategory(name, description, colors);
    next();

  } catch (serverError) {
    handleError(response, request, serverError);
  }
}

async function show(request, response, next) {
  try {
    const { lang } = request.query;
    const { id } = request.params;
    const [category] = await getCategory(id);
    const posts = await getCategoryPosts(id, lang);
    request.category = category;
    request.posts = posts;
    next();

  } catch (serverError) {
    handleError(response, request, serverError);
  }
}

async function edit(request, response, next) {
  try {
    const { id } = request.params;
    const [category] = await getCategory(id);
    request.category = category;
    next()

  } catch (serverError) {
    handleError(response, request, serverError);
  }
}

async function update(request, response, next) {
  try {
    const { id, name, description,colors } = request.body;
    await updateCategory(id, name, description, colors);
    next();

  } catch (serverError) {
    handleError(response, request, serverError);
  }
}

async function destroy(request, response, next) {
  try {
    const { id } = request.body;
    await deleteCategoryPosts(id);
    await deleteCategory(id);
    next();

  } catch (serverError) {
    handleError(response, request, serverError);
  }
}

module.exports = {
  index,
  show,
  create,
  edit,
  update,
  destroy
};
