/* eslint-disable no-console */

/**
 * Sequelizeのインスタンスを作成する。
 */
const { Sequelize } = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/database")[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established succesfully.");
  } catch (error) {
    console.error("Unnable to connect to database.", error);
  }
};

checkConnection();

module.exports = sequelize;
