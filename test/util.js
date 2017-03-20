var responseValidator = function(expectedStatusCode, validationFunction) {
  return {
    json: function(statusCode, data) {
      statusCode.should.equal(expectedStatusCode);
    },
    send: function(statusCode, data) {
      statusCode.should.equal(expectedStatusCode);
      validationFunction(data);
    }
  };
};

module.exports = {
  reponseValidator
};
