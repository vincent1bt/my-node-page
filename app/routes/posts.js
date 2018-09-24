const express = require('express');
const postsRouter = express.Router({ mergeParams: true });
const react = require('react');
const { ensureLoggedIn } = require('connect-ensure-login');
const { renderToString } = require('react-dom/server');

const ShowComponent = require('./../views/posts/show');
const EditComponent = require('./../views/posts/edit');
const NewComponent = require('./../views/posts/new');
const IndexComponent = require('./../views/posts/index');
const SearchComponent = require('./../views/posts/search');

const { createPostValidation, updatePostValidation } = require('./../validations/post');

const {
  index,
  create,
  show,
  newPost,
  update,
  deletePost,
  edit,
  search,
} = require('./../controllers/posts');

const authenticated = require('./../utils/auth');

postsRouter.get('/', index, (request, response) => {
  const { posts, count } = request;
  const isAdmin = authenticated(request);
  const body = renderToString(react.createElement(IndexComponent, { posts, count, isAdmin }));
  response.status(200).send(body);
});

postsRouter.get('/new', [ensureLoggedIn("/posts"), newPost], (request, response) => {
  const [errorObject] = request.flash('error');
  const { categories } = request;
  const body = renderToString(react.createElement(NewComponent, { categories, errorObject }));
  response.status(200).send(body);
});

postsRouter.get('/buscar', search, (request, response) => {
  const { posts } = request;
  const isAdmin = authenticated(request);
  const { term } = request.query;
  const body = renderToString(react.createElement(SearchComponent, { posts, term, isAdmin }));
  response.status(200).send(body);
});

postsRouter.get('/:id', show, (request, response) => {
  const { post, categories } = request.postObject;
  const isAdmin = authenticated(request);
  const body = renderToString(react.createElement(ShowComponent, { post, categories, isAdmin }));
  response.status(200).send(body);
});

postsRouter.post('/', [ensureLoggedIn("/posts"), createPostValidation, create], (request, response) => {
  const { postId } = request;
  response.redirect(301, `/posts/${postId}`);
});

postsRouter.get('/edit/:id', [ensureLoggedIn("/posts"), edit], (request, response) => {
  const [errorObject] = request.flash('error');
  const { post, categories } = request;
  const body = renderToString(react.createElement(EditComponent, { post, categories, errorObject }));
  response.status(200).send(body);
});

postsRouter.put('/', [ensureLoggedIn("/posts"), updatePostValidation, update], (request, response) => {
  const { id } = request.body;
  response.redirect(301, `/posts/${id}`);
});

postsRouter.delete('/', [ensureLoggedIn("/posts"), deletePost], (request, response) => {
  response.redirect(301, '/admin');
});

module.exports = postsRouter;
