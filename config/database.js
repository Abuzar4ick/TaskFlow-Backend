const { Sequelize } = require('sequelize')

const sequelize = new Sequelize("TaskFlow", "postgres", "12345", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
    port: 5432
})

module.exports = sequelize