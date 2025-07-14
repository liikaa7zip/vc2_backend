const { Sequelize } = require('sequelize');

// Here put your database name, username, password, and host
const sequelize = new Sequelize('vc2_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log,
});


module.exports = sequelize;

