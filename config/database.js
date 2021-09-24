module.exports = {
  development: {
    username: process.env.DB_USERNAME || "blog",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_DATABASE || "postgres",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "postgres",
  },
  test: {
    username: process.env.DB_USERNAME || "blog_test",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_DATABASE || "postgres",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "postgres",
  },
  production: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || "database_production",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "postgres",
  },
};
