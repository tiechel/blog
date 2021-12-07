const createError = require("http-errors");

module.exports.notFound = (req, res, next) => {
  next(createError(404, `Not Found - ${req.originalUrl}`));
};

module.exports.errorHandler = (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  if (req.app.get("env") === "development") {
    res.locals.error = err;
  } else {
    res.locals.error = {};
  }

  // render the error page
  res.status(err.status || 500);
  res.render("error/500");
};
