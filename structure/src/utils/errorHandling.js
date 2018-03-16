 function notFound(message, errorCode) {

    Error.captureStackTrace(this, this.constructor);
  
    this.name = this.constructor.name;
    this.message = message || 'The requested resource couldn\'t be found';
    this.statusCode = 404;
    this.errorCode =  404;
  };

  function notimplemented() {

    Error.captureStackTrace(this, this.constructor);
  
    this.name = this.constructor.name;
    this.message ='"Not implemented yet';
    this.statusCode = 501;
    this.errorCode = 501;
  };

  function createError(statusCode, message, errorCode) {

    Error.captureStackTrace(this, this.constructor);
  
    this.name = this.constructor.name;
    this.message = message || 'An error has occurred.';
    this.statusCode = statusCode || 500;
    this.errorCode = errorCode || 500;
  };

  module.exports.notFound = notFound;