const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const path = require('path');
const helmet = require('helmet')
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const methodOverride = require('method-override');
const flash = require('connect-flash');

const postsRouter = require('./routes/posts');
const categoriesRouter = require('./routes/categories');
const projectsRouter = require('./routes/projects');
const applicationRouter = require('./routes/application');

const errorTemplate = require('./views/errorTemplate');

const configurePassport = require('./utils/passport');
const weekTime = 7 * 24 * 3600 * 1000;

configurePassport();
const app = express();
app.set('trust proxy', 'loopback');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(expressSanitizer());
app.use(cookieSession({
  name: 'session',
  keys: ['theKeyCat'],
  maxAge: weekTime,
  cookie: {
  secure: true,
  httpOnly: true
}
}));
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", "*.facebook.com", "www.google-analytics.com", "res.cloudinary.com", "maxcdn.bootstrapcdn.com", "cdn.jsdelivr.net"],
      scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'", "www.google-analytics.com", "cdn.jsdelivr.net", "*.facebook.net"],
      styleSrc: ["'self'", "'unsafe-inline'", "cdn.jsdelivr.net", "maxcdn.bootstrapcdn.com"],
      imgSrc: ["'self'", "res.cloudinary.com", "blob:", "data:", "www.google-analytics.com", "*.facebook.com", "cdn.jsdelivr.net"]
    }
  }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/posts', postsRouter);
app.use('/categories', categoriesRouter);
app.use('/portfolio', projectsRouter);
app.use('/', applicationRouter);
app.use((request, response) => {
  const text = "404 We did not find what you wanted";
  const html = errorTemplate(text);
  response.status(404).send(html);
});

module.exports = app;
