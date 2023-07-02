// Objetivo: configurar la conexion a la base de datos
const {Sequelize} = require('sequelize');
const {config} = require('../config/config');
const setupModels = require('../models/index');

//creo la uri de conexion a la base de datos
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

//inicialice la conexion a la base de datos
const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
});

//inicialice los modelos
setupModels(sequelize);
//haga una sincronizacion de los modelos con la base de datos
sequelize.sync()

module.exports = sequelize;
