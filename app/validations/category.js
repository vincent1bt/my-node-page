const { body, validationResult } = require('express-validator/check');
const { errorInApp } = require('./../utils/error.js');

const notEmpty = (value) => {
  if (value != "") return true;
  return false;
}

const createCategoryValidation = [
  body('name', 'Invalid name param').custom(notEmpty),
  body('colors[first]', 'Invalid first color').custom(notEmpty),
  body('colors[second]', 'Invalid second color').custom(notEmpty),
  (request, response, next) => {
    const requestErrors = validationResult(request);
    const { id } = request.body;

    if (!requestErrors.isEmpty()) {
      const error = errorInApp("Error on create category", requestErrors.array(), 400);
      request.flash('error', error);
      response.redirect(301, '/categories/new');
    } else {
      next();
    }
  },
];

const updateCategoryValidation = [
  body('name', 'Invalid name param').custom(notEmpty),
  body('colors[first]', 'Invalid first color').custom(notEmpty),
  body('colors[second]', 'Invalid second color').custom(notEmpty),
  (request, response, next) => {
    const requestErrors = validationResult(request);
    const { id } = request.body;

    if (!requestErrors.isEmpty()) {
      const error = errorInApp("Error on create post", requestErrors.array(), 400);
      request.flash('error', error);
      response.redirect(301, `/categories/edit/${id}`);
    } else {
      next();
    }
  },
];

module.exports = {
  createCategoryValidation,
  updateCategoryValidation
};
