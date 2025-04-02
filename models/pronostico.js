'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pronostico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pronostico.init({
    cod: DataTypes.STRING,
    message: DataTypes.INTEGER,
    cnt: DataTypes.INTEGER,
    list: DataTypes.JSON,
    city: DataTypes.JSON,
    cityId: DataTypes.INTEGER,
    cityName: DataTypes.STRING,
    cityCoord: DataTypes.JSON,
    cityCountry: DataTypes.STRING,
    cityPopulation: DataTypes.INTEGER,
    cityTimezone: DataTypes.INTEGER,
    citySunrise: DataTypes.INTEGER,
    citySunset: DataTypes.INTEGER,
    currentTemp: DataTypes.FLOAT,
    currentFeelsLike: DataTypes.FLOAT,
    currentTempMin: DataTypes.FLOAT,
    currentTempMax: DataTypes.FLOAT,
    currentPressure: DataTypes.INTEGER,
    currentSeaLevel: DataTypes.INTEGER,
    currentGrndLevel: DataTypes.INTEGER,
    currentHumidity: DataTypes.INTEGER,
    currentTempKf: DataTypes.FLOAT,
    weatherId: DataTypes.INTEGER,
    weatherMain: DataTypes.STRING,
    weatherDescription: DataTypes.STRING,
    weatherIcon: DataTypes.STRING,
    cloudsAll: DataTypes.INTEGER,
    windSpeed: DataTypes.FLOAT,
    windDeg: DataTypes.INTEGER,
    windGust: DataTypes.FLOAT,
    visibility: DataTypes.INTEGER,
    pop: DataTypes.FLOAT,
    rain3h: DataTypes.FLOAT,
    sysPod: DataTypes.STRING,
    dt: DataTypes.BIGINT,
    dtTxt: DataTypes.STRING,
    forecastDate: DataTypes.STRING,
    forecastTemp: DataTypes.FLOAT,
    forecastDesc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pronostico',
    tableName: 'pronostico',
  });
  return pronostico;
};