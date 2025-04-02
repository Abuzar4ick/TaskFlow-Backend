const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Task = require("./Task");
const User = require("./User");

const Comment = sequelize.define(
  "comment",
  {
    task_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Task,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "comments",
  }
);

Comment.belongsTo(Task, { foreignKey: "task_id", as: "task" });
Comment.belongsTo(User, { foreignKey: "user_id", as: "user" });

module.exports = Comment;
