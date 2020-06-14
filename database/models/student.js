const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('student', {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true,
    unique: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://via.placeholder.com/480x240?text=Placeholder',
    allowNull: false
  },
  gpa: { type: Sequelize.DOUBLE, defaultValue: 0.0, allowNull: false }
});

module.exports = Student;
