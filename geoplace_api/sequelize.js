
const { Sequelize } = require('sequelize');
require('dotenv').config() 
const env = process.env;

const sequelize = new Sequelize('geoplace','geoplace','geoplace', {
    host: 'localhost',
    dialect: 'mysql' 
});


module.exports = sequelize;