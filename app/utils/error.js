function errorInApp(error, description = null, code = 500) {
  return {
    error,
    description,
    code,
  };
}

module.exports = {
  errorInApp,
};
