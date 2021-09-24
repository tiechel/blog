"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      subject: {
        field: "subject",
        type: DataTypes.TEXT,
      },
      body: {
        field: "body",
        type: DataTypes.TEXT,
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "posts",
      createdAt: "created_at",
      updatedAt: "updated_at",
      defaultScope: {
        order: [["created_at", "desc"]],
      },
    },
  );
  return Post;
};
