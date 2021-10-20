const sequelize = require('./db');
const {DataTypes} = require("sequelize");

const Todo = sequelize.define('Todo', {
  'name': {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: true,
  createdAt: true,
  updatedAt: false,
});

module.exports = {
  Todo: Todo,
}
