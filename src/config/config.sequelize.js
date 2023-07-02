const {config} = require('../config/config');

//creo la uri de conexion a la base de datos
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; //cambiar postgres por mysql cuando vaya a hacer migraciones a mysql

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',//cambiar postgres por mysql cuando vaya a hacer migraciones a mysql
  },
  production: {
    url: URI,
    dialect: 'postgres',//cambiar postgres por mysql cuando vaya a hacer migraciones a mysql
  },
}
