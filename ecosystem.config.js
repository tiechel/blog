module.exports = {
  apps: [
    {
      name: "blog:server",
      script: "./bin/www",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      out_file: "./logs/server.log",
      error_file: "./logs/server-error.log",
      env: {
        PORT: 3000,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
