// Code: index.js
const {User, UserSchema} = require('./user.model');
const {Customer, CustomerSchema} = require('./customer.model');

//setupModels es una funcion que recibe una instancia de sequelize
function setupModels(sequelize){
  //Aqui se inicializan los modelos
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  //Aqui se definen las relaciones entre los modelos
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
}

module.exports = setupModels;
