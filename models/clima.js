'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clima extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clima.init({
    name: DataTypes.STRING,
    temp: DataTypes.FLOAT,
    description: DataTypes.STRING,
    humidity: DataTypes.INTEGER,
    wind_speed: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Clima',
  });
  return Clima;
};