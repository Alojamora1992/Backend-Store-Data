const {config} = require('../config/config');

//creo la uri de conexion a la base de datos
const URI = config.dbUri//cambiar postgres por mysql cuando vaya a hacer migraciones a mysql

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
