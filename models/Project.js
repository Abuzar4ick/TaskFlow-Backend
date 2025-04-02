const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Project = sequelize.define(
  "project",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    timestamps: true,
    tableName: "projects"
  }
);

Project.belongsTo(User, { foreignKey: "owner_id", as: "owner" });

module.exports = Project;