// Objetivo: Crear el modelo de la tabla users
const {Model, DataTypes, Sequelize } = require('sequelize');

//nombre de la tabla
const USER_TABLE = 'users';

//definicion del modelo
const UserSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'customer'
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
        field: 'created_at'
    },
  }

  //definicion de la clase extendiendo de Model
  class User extends Model{
    //static quiere decir que es una propiedad de la clase y no de la instancia
      static associate(models){
          this.hasOne(models.Customer, {
            foreignKey: 'userId',
            as: 'customer'});
      }

      static config(sequelize){
          return{
              sequelize,
              tableName: USER_TABLE,
              modelName: 'User',
              timestamps: false,
          }
      }
  }

module.exports = {
  UserSchema,
  User,
  USER_TABLE
};
