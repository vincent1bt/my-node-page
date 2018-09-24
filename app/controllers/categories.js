const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteFromCategory,
} = require('./../models/category');

const { getCategoryPosts, deleteCategoryRelations } = require('./../models/postCategories');
const { errorInApp } = require('./../utils/error.js');

async function index(request, response, next) {
  try {
    const categories = await getCategories();
    request.categories = categories;
    next();
  } catch (serverError) {
    console.log(serverError, 'Error on index(category) request');

    const error = errorInApp("Error on index view(category)", serverError);
    request.flash('error', error);
    response.redirect('/admin');
  }
}

async function create(request, response, next) {
  try {
    const { name, description, colors } = request.body;
    await createCategory(name, description, colors);
    next();

  } catch (serverError) {
    console.log(serverError, 'Error on create(category) request');

    const error = errorInApp("Error on create category", serverError);
    request.flash('error', error);
    response.redirect('/categories/new');
  }
}

async function show(request, response, next) {
  try {
    const { id } = request.params;
    const [category] = await getCategory(id);
    const posts = await getCategoryPosts(id);
    request.category = category;
    request.posts = posts;
    next();
  } catch (serverError) {
    console.log(serverError, 'Error on show(category) request');

    const error = errorInApp("Error on show view(category)", serverError);
    request.flash('error', error);
    response.redirect('/admin');
  }
}

async function edit(request, response, next) {
  try {
    const { id } = request.params;
    const [category] = await getCategory(id);
    request.category = category;
    next()

  } catch (serverError) {
    console.log(serverError, 'Error on edit(category) request');

    const error = errorInApp("Error on edit view(category)", serverError);
    request.flash('error', error);
    response.redirect('/admin');
  }
}

async function update(request, response, next) {
  try {
    const { id, name, description,colors } = request.body;
    await updateCategory(id, name, description, colors);
    next();

  } catch (serverError) {
    console.log(serverError, 'Error on update(category) request');

    const error = errorInApp("Error updating the category", serverError);
    const { id } = request.body;

    request.flash('error', error);
    response.redirect(301, `/categories/edit/${id}`);
  }
}

async function deleteCategory(request, response, next) {
  try {
    const { id } = request.body;
    await deleteCategoryRelations(id);
    await deleteFromCategory(id);
    next();

  } catch (serverError) {
    console.log(serverError, 'Error on delete(category) request');

    const error = errorInApp("Error on delete category", serverError);
    request.flash('error', error);
    response.redirect('/admin');
  }
}

module.exports = {
  index,
  show,
  create,
  edit,
  update,
  deleteCategory
};
