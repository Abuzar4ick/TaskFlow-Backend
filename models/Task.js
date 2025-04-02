const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Project = require("./Project");
const User = require("./User");

const Task = sequelize.define(
  "task",
  {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING(50),
      defaultValue: "todo",
    },
    priority: {
      type: DataTypes.STRING,
      defaultValue: "medium",
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Project,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    assigned_to: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "SET NULL",
    },
  },
  {
    timestamps: true,
    tableName: "tasks"
  }
);

Task.belongsTo(Project, { foreignKey: "project_id", as: "project" });
Task.belongsTo(User, { foreignKey: "assigned_to", as: "assignee" });

module.exports = Task;
