const { DataTypes, Model } = require("sequelize");
const sequelize = require("..");

class Post extends Model {}

Post.init(
  {
    subject: {
      type: DataTypes.TEXT,
    },
    body: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "Post",
    defaultScope: {
      order: [["createdAt", "desc"]],
    },
  },
);

module.exports = Post;
