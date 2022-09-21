const logger = (request, response, next) => {
  console.log(`${request.method} ${request.path}?name=${request.query.name}`);
  next();
};

module.exports = logger;
