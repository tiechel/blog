module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.sqlite3",
    seederStorage: "sequelize",
  },
  test: {
    dialect: "sqlite",
    storage: ":memory",
    seederStorage: "sequelize",
    logging: false,
  },
  production: {
    dialect: "sqlite",
    storage: "./db.sqlite3",
    seederStorage: "sequelize",
    logging: false,
  },
};
