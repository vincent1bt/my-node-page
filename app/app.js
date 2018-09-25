const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const path = require('path');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const methodOverride = require('method-override');
const flash = require('connect-flash');

const postsRouter = require('./routes/posts');
const categoriesRouter = require('./routes/categories');
const applicationRouter = require('./routes/application');

const configurePassport = require('./utils/passport');
const weekTime =  7 * 24 * 3600 * 1000;

configurePassport();
const app = express();
app.set('trust proxy', 'loopback');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(expressSanitizer());
app.use(cookieSession({
  name: 'session',
  keys: ['theKeyCat'],
  maxAge: weekTime
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/posts', postsRouter);
app.use('/categories', categoriesRouter);
app.use('/', applicationRouter);
app.use((request, response) => {
  response.redirect("/");
});

module.exports = app;
