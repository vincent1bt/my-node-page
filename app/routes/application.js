const express = require('express');
const react = require('react');
const passport = require('passport');
const { renderToString } = require('react-dom/server');
const { ensureLoggedIn } = require('connect-ensure-login');

const applicationRouter = express.Router({ mergeParams: true });
const AboutComponent = require('./../views/about');
const AdminComponent = require('./../views/application/admin');
const LoginComponent = require('./../views/application/login');
const IndexComponent = require('./../views/posts/index');
const { admin } = require('./../controllers/application');
const { index } = require('./../controllers/posts');

const authenticated = require('./../utils/auth');

applicationRouter.get('/', index, (request, response) => {
  const { posts, count } = request;
  const isAdmin = authenticated(request);
  const body = renderToString(react.createElement(IndexComponent, { posts, count, isAdmin }));
  response.status(200).send(body);
});

applicationRouter.get('/admin', [ensureLoggedIn("/posts"), admin], (request, response) => {
  const [errorObject] = request.flash('error');
  const error = null;
  const { posts, categories } = request;
  const body = renderToString(react.createElement(AdminComponent, { posts, categories, errorObject }));
  response.status(200).send(body);
});

applicationRouter.get('/sobre', (request, response) => {
  const { user } = request;
  const isAdmin = authenticated(request);
  const body = renderToString(react.createElement(AboutComponent, { isAdmin }));
  response.status(200).send(body);
});

applicationRouter.get('/login', (request, response) => {
  const [errorObject] = request.flash('error');
  const isAdmin = false;
  const body = renderToString(react.createElement(LoginComponent, { isAdmin, errorObject }));
  response.status(200).send(body);
});

applicationRouter.post('/login',
  passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
  (request, response) => {
    response.redirect(301, '/admin');
  }
);

applicationRouter.get('/logout', (request, response) => {
  request.logout();
  response.redirect(301, '/posts');
});

module.exports = applicationRouter;
