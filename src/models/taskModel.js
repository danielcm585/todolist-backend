const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db')
const User = require('./userModel');

class Task extends Model {}

Task.init({
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Task'
});

Task.belongsTo(User, { foreignKey: 'ownerId' });
User.hasMany(Task, { foreignKey: 'ownerId' });

module.exports = Task;
