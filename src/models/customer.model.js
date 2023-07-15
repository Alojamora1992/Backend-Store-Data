const {Model, DataTypes, Sequelize} = require('sequelize');
const {USER_TABLE} = require('./user.model');

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName:{
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name'
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createAt:{
    type: DataTypes.DATE,
    allowNull: false,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  userId:{ //Este campo hace referencia a toda la info del id del usuario de la tabla users.
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    field: 'user_id',
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Customer extends Model {
  static associate(models) {
    // define association here
    this.belongsTo(models.User, {as: 'user'});
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'customerId'
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false
    }
  }
};

module.exports = {
  CustomerSchema,
  Customer,
  CUSTOMER_TABLE
};


