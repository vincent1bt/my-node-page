const { body, validationResult } = require('express-validator/check');
const { errorInApp } = require('./../utils/error.js');

const notEmpty = (value) => {
  if (value != "") return true;
  return false;
}

const updatePostValidation = [
  body('post[title]', 'Invalid title param').custom(notEmpty),
  body('post[description]', 'Invalid description param').custom(notEmpty),
  body('post[body]', 'Invalid body param').custom(notEmpty),
  body('post[image]', 'Invalid image param').custom(notEmpty),
  body('colors[first]', 'Invalid first color').custom(notEmpty),
  body('colors[second]', 'Invalid second color').custom(notEmpty),
  (request, response, next) => {
    const requestErrors = validationResult(request);
    const { id } = request.body;

    if (!requestErrors.isEmpty()) {
      const error = errorInApp("Error on create post", requestErrors.array(), 400);
      request.flash('error', error);
      response.redirect(301, `/posts/edit/${id}`);
    } else {
      next();
    }
  },
];

const createPostValidation = [
  body('post[title]', 'Invalid title param').custom(notEmpty),
  body('post[description]', 'Invalid description param').custom(notEmpty),
  body('post[body]', 'Invalid body param').custom(notEmpty),
  body('post[image]', 'Invalid image param').custom(notEmpty),
  body('colors[first]', 'Invalid first color').custom(notEmpty),
  body('colors[second]', 'Invalid second color').custom(notEmpty),
  body('categories', 'Invalid categories').exists({checkFalsy: true}),
  (request, response, next) => {
    const requestErrors = validationResult(request);

    if (!requestErrors.isEmpty()) {
      const error = errorInApp("Error on create post", requestErrors.array(), 400);
      request.flash('error', error);
      response.redirect('/posts/new');
    } else {
      next();
    }
  },
];

module.exports = {
  createPostValidation,
  updatePostValidation
};
