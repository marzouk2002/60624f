<<<<<<< HEAD
require("dotenv").config();
=======
require('dotenv').config();
>>>>>>> master
const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/messenger", {
  logging: false,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME
});

module.exports = db;
