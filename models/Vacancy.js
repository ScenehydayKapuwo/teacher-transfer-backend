const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Vacancy = sequelize.define('Vacancy', {
  school: { type: DataTypes.STRING, allowNull: false },
  subject: { type: DataTypes.STRING },
  number_of_teachers: { type: DataTypes.STRING, allowNull: false, unique: true },
  district: { type: DataTypes.STRING },
  province: { type: DataTypes.STRING },
});

module.exports = Vacancy;
