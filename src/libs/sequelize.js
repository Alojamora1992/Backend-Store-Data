// Objetivo: configurar la conexion a la base de datos
const {Sequelize} = require('sequelize');
const {config} = require('../config/config');
const setupModels = require('../models/index');

//creo la uri de conexion a la base de datos
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; //cambiar postgres por mysql

//inicialice la conexion a la base de datos
const sequelize = new Sequelize(URI, {
  dialect: 'postgres', //cambiar postgres por mysql
  logging: true,
});

//inicialice los modelos
setupModels(sequelize);

module.exports = sequelize;
