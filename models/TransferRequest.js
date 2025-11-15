const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 
const Teacher = require('./Teacher');
const School = require('./School');

const TransferRequest = sequelize.define('TransferRequest', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: DataTypes.ENUM(
      'pending', 
      'headteacher_approved', 
      'headteacher_rejected', 
      'approved', 
      'rejected'
    ),
    defaultValue: 'pending',
  },
  tsNo: {
    type: DataTypes.STRING
  },
});

// Associations
TransferRequest.belongsTo(Teacher, { as: 'teacher', foreignKey: 'tsNo', targetKey: 'tsNo' });
TransferRequest.belongsTo(School, { as: 'fromSchool', foreignKey: 'fromSchoolId' });
TransferRequest.belongsTo(School, { as: 'toSchool', foreignKey: 'toSchoolId' });

Teacher.hasMany(TransferRequest, { as: 'transferRequests', foreignKey: 'tsNo', sourceKey: 'tsNo' });
School.hasMany(TransferRequest, { as: 'fromTransfers', foreignKey: 'fromSchoolId' });
School.hasMany(TransferRequest, { as: 'toTransfers', foreignKey: 'toSchoolId' });

module.exports = TransferRequest;
