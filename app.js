const createError = require("http-errors");
const compression = require("compression");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const datefns = require("date-fns");
const { errorHandler, notFound } = require("./middleware/errorHandler");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.locals.basedir = app.get("views");
app.locals.datefns = datefns;

app.use(logger("dev"));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require("./middleware/session"));
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", require("./routes/blog"));
app.use("/", require("./routes/blog-admin"));

// Error Handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
