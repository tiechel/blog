const session = require("express-session");
const SequelizeSessionStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("../db");

module.exports = session({
  secret: "poepoepoepoepoepoepoe",
  store: new SequelizeSessionStore({
    db: sequelize,
    checkExpirationInterval: 60 * 60 * 1000,
    expiration: 7 * 24 * 60 * 60 * 1000,
  }),
  resave: false,
  saveUninitialized: true,
});
