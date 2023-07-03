// Code: index.js
const {User, UserSchema} = require('./user.model');
const {Customer, CustomerSchema} = require('./customer.model');
const {Category, CategorySchema} = require('./category.model');
const {Product, ProductSchema} = require('./product.model');

//setupModels es una funcion que recibe una instancia de sequelize
function setupModels(sequelize){
  //Aqui se inicializan los modelos
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));

  //Aqui se definen las relaciones entre los modelos
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = setupModels;
