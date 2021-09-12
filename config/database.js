module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./database.sqlite3",
  },
  test: {
    dialect: "sqlite",
    storage: ":memory",
  },
  production: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || "database_production",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",
  },
};
