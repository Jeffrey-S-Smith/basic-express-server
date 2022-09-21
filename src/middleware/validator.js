const validator = (objs) => (request, response, next) => {
  let result = null;

  for (let obj of objs) {
    if (obj.name === request.params.name) {
      result = obj;
    }
  }

  if (!result) {
    next('no name found');
  } else {
    response.json(result);
  }
};

module.exports = validator;

