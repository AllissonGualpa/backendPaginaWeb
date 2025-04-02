'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_clima extends Model {
    static associate(models) {
      user_clima.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      user_clima.belongsTo(models.Clima, {
        foreignKey: 'clima_id'
      });
    }
  }
  
  user_clima.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    clima_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'clima',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'user_clima',
    tableName: 'userClima',
    timestamps: false
  });
  
  return user_clima;
};