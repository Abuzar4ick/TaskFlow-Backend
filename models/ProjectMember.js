const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Project = require("./Project");
const User = require("./User");

const ProjectMember = sequelize.define(
  "project_member",
  {
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Project,
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
    role: {
      type: DataTypes.STRING(50),
      defaultValue: "member",
    },
  },
  {
    timestamps: true,
    tableName: "project_members",
  }
);

ProjectMember.belongsTo(Project, { foreignKey: "project_id", as: "project" });
ProjectMember.belongsTo(User, { foreignKey: "user_id", as: "user" });

module.exports = ProjectMember;
