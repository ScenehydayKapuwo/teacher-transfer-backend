const { Sequelize } = require('sequelize');

// ✅ Correct MySQL connection
const sequelize = new Sequelize('teacher_transfer', 'root', '', {
  host: 'localhost',
  port: 3306, // Default MySQL port
  dialect: 'mysql',
  logging: false, // Disable SQL logging in console
});

module.exports = sequelize;
