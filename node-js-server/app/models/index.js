const dbConfig = require("../config/db.config.js");

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_INSTANCE = process.env.DB_INSTANCE;

const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   dialectOptions: {
//     socketPath: dbConfig.HOST,
//   },
// });

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: `/cloudsql/${DB_INSTANCE}`,
  dialect: 'mysql',
  dialectOptions: {
    socketPath: `/cloudsql/${DB_INSTANCE}`,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
