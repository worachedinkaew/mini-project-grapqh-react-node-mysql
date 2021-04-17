import Sequelize from "sequelize"
require("dotenv").config()

const connect_db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_TYPE,
  omitNull: false,
  freezeTableName: true,
  pool: {
    max: 100,
    min: 0,
    acquire: 1000000,
    idle: 200000,
  },
  dialectOptions: {
    options: { requestTimeout: 180000 },
  },
  logging: false,
})

export default connect_db
