const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;
