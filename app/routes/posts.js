const express = require('express');
const postsRouter = express.Router({ mergeParams: true });
const react = require('react');
const { ensureLoggedIn } = require('connect-ensure-login');
const { renderToString } = require('react-dom/server');

const MetaComponent = require('./../views/meta');
const {
  ShowComponent,
  EditComponent,
  NewComponent,
  IndexComponent,
  SearchComponent
} = require('./../views/posts/components');

const indexTemplate = require('./../views/posts/indexTemplate');
const showTemplate = require('./../views/posts/showTemplate');

const { createPostValidation, updatePostValidation } = require('./../validations/post');

const {
  index,
  create,
  show,
  newPost,
  update,
  destroy,
  edit,
  search,
} = require('./../controllers/posts');

const authenticated = require('./../utils/auth');

postsRouter.get('/', index, (request, response) => {
  const { lang, page } = request.query;
  const { posts, count } = request;

  const isAdmin = authenticated(request);
  const body = renderToString(react.createElement(IndexComponent, { posts, count, page, lang, isAdmin }));
  const html = indexTemplate(body);
  response.status(200).send(html);
});

postsRouter.get('/new', [ensureLoggedIn("/posts"), newPost], (request, response) => {
  const [errorObject] = request.flash('error');
  const { categories } = request;
  const body = renderToString(react.createElement(NewComponent, { categories, errorObject }));
  response.status(200).send(body);
});

postsRouter.get('/search', search, (request, response) => {
  const { posts } = request;
  const isAdmin = authenticated(request);
  const { term } = request.query;
  const body = renderToString(react.createElement(SearchComponent, { posts, term, isAdmin }));
  const html = indexTemplate(body);
  response.status(200).send(html);
});

postsRouter.get('/:id', show, (request, response) => {
  const { post, categories } = request.postObject;
  const isAdmin = authenticated(request);
  const body = renderToString(react.createElement(ShowComponent, { post, categories, isAdmin }));
  const meta = renderToString(react.createElement(MetaComponent, { ...post }));
  const html = showTemplate(body, meta);
  response.status(200).send(html);
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

postsRouter.delete('/', [ensureLoggedIn("/posts"), destroy], (request, response) => {
  response.redirect(301, '/admin');
});

module.exports = postsRouter;
