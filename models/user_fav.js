'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_fav extends Model {
    static associate(models) {
      user_fav.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'usuario'
      });
    }
  }
  
  user_fav.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user', // Cambiado a minúscula para coincidir con el nombre de tabla
        key: 'id'
      }
    },
    lugar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_fav',
    tableName: 'userFav', // Asegúrate que coincida con tu migración
  });
  
  return user_fav;
};