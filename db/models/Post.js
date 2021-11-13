const { DataTypes, Model } = require("sequelize");
const sequelize = require("..");

class Post extends Model {}

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

module.exports = Post;
