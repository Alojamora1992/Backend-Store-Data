// Code: index.js
const {User, UserSchema} = require('./user.model');
const {Customer, CustomerSchema} = require('./customer.model');
const {Category, CategorySchema} = require('./category.model');
const {Product, ProductSchema} = require('./product.model');
const { Order, OrderSchema } = require('./order.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');

//setupModels es una funcion que recibe una instancia de sequelize
function setupModels(sequelize) {
  //tablas
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));

  //tablas intermedias
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  //Aca se definen las relaciones entre los modelos
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;
