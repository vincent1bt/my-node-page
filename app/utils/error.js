const errorTemplate = require('./../views/errorTemplate');

function errorInApp(error, description = null, code = 500) {
  return {
    error,
    description,
    code,
  };
}

function handleError(response, request, error) {
  const environment = process.env.NODE_ENV || 'development';
  const text = "Algo salio mal"

  if (environment == 'development') {
    console.log(`Error on request: ${request.url}, Description: ${error}`);
    const html = errorTemplate(text, error);
    response.status(500).send(html);

  } else {
    const html = errorTemplate(text);
    response.status(500).send(html);
  }
}

module.exports = {
  errorInApp,
  handleError
};
