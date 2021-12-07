const { DataTypes, Model } = require("sequelize");
const sequelize = require("..");

class User extends Model {}

User.init(
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
    modelName: "User",
    defaultScope: {
      order: [["createdAt", "desc"]],
    },
  },
);

module.exports = Post;
