'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Relación N:M con Clima (a través de user_clima)
      User.belongsToMany(models.Clima, {
        through: models.user_clima,
        foreignKey: 'user_id',
        as: 'climas'
      });
      
      // Relación 1:N con user_fav (un usuario tiene muchos favoritos)
      User.hasMany(models.user_fav, {
        foreignKey: 'user_id',
        as: 'favoritos'
      });
    }
  }
  
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
  });
  
  return User;
};