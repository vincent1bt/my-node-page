const express = require('express');
const categoriesRouter = express.Router({ mergeParams: true });
const react = require('react');
const { ensureLoggedIn } = require('connect-ensure-login');
const { renderToString } = require('react-dom/server');

const {
  ShowComponent,
  EditComponent,
  NewComponent,
  IndexComponent,
  SearchComponent
} = require('./../views/categories/components');

const indexTemplate = require('./../views/categories/indexTemplate');
const showTemplate = require('./../views/categories/showTemplate');

const { createCategoryValidation, updateCategoryValidation } = require('./../validations/category');

const {
  index,
  create,
  show,
  update,
  destroy,
  edit,
} = require('./../controllers/categories');

const authenticated = require('./../utils/auth');

categoriesRouter.get('/', index, (request, response) => {
  const { categories } = request;
  const isAdmin = authenticated(request);
  const body = renderToString(react.createElement(IndexComponent, { categories, isAdmin }));
  const html = indexTemplate(body);
  response.status(200).send(html);
});

categoriesRouter.get('/new', ensureLoggedIn("/posts"), (request, response) => {
  const [errorObject] = request.flash('error');
  const body = renderToString(react.createElement(NewComponent, { errorObject }));
  response.status(200).send(body);
});

categoriesRouter.get('/:id', show, (request, response) => {
  const { category, posts } = request;
  const isAdmin = authenticated(request);
  const body = renderToString(react.createElement(ShowComponent, { posts, category, isAdmin }));
  const html = showTemplate(body);
  response.status(200).send(html);
});

categoriesRouter.post('/', [ensureLoggedIn("/posts"), createCategoryValidation, create], (request, response) => {
  response.redirect(301, '/categories');
});

categoriesRouter.get('/edit/:id', [ensureLoggedIn("/posts"), edit], (request, response) => {
  const [errorObject] = request.flash('error');
  const { category } = request;
  const body = renderToString(react.createElement(EditComponent, { category, errorObject }));
  response.status(200).send(body);
});

categoriesRouter.put('/', [ensureLoggedIn("/posts"), updateCategoryValidation, update], (request, response) => {
  const { id } = request.body;
  response.redirect(301, `/categories/${id}`);
});

categoriesRouter.delete('/', [ensureLoggedIn("/posts"), destroy], (request, response) => {
  response.redirect(301, '/admin');
});
module.exports = categoriesRouter;
