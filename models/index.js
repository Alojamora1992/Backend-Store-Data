// Code: index.js
const {User, UserSchema} = require('./user.model');

//setupModels es una funcion que recibe una instancia de sequelize
function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
