const { Sequelize } = require('sequelize');

module.exports = new Sequelize('CSCI400', 'csci400', '123456', {
    host: 'localhost',
    dialect:'postgres'
  });
  