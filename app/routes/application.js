const express = require('express');
const passport = require('passport');
const applicationRouter = express.Router({ mergeParams: true });
const react = require('react');
const { renderToString } = require('react-dom/server');
const { ensureLoggedIn } = require('connect-ensure-login');

const AboutComponent = require('./../views/about');
const AdminComponent = require('./../views/application/admin');
const LoginComponent = require('./../views/application/login');
const IndexComponent = require('./../views/posts/index');

const indexTemplate = require('./../views/posts/indexTemplate');
const aboutTemplate = require('./../views/aboutTemplate');

const { admin } = require('./../controllers/application');
const { index } = require('./../controllers/posts');

const authenticated = require('./../utils/auth');

applicationRouter.get('/', index, (request, response) => {
  const { posts, count } = request;
  const isAdmin = authenticated(request);
  const body = renderToString(react.createElement(IndexComponent, { posts, count, isAdmin }));
  const html = indexTemplate(body);
  response.status(200).send(html);
});

applicationRouter.get('/admin', [ensureLoggedIn("/posts"), admin], (request, response) => {
  const [errorObject] = request.flash('error');
  const error = null;
  const { posts, categories } = request;
  const body = renderToString(react.createElement(AdminComponent, { posts, categories, errorObject }));
  response.status(200).send(body);
});

applicationRouter.get(['/sobre', '/about'], (request, response) => {
  const { user } = request;
  const isAdmin = authenticated(request);
  const body = renderToString(react.createElement(AboutComponent, { isAdmin }));
  const html = aboutTemplate(body);
  response.status(200).send(html);
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
