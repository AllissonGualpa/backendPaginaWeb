'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pronosticos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cod: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.INTEGER
      },
      cnt: {
        type: Sequelize.INTEGER
      },
      list: {
        type: Sequelize.JSON
      },
      city: {
        type: Sequelize.JSON
      },
      cityId: {
        type: Sequelize.INTEGER
      },
      cityName: {
        type: Sequelize.STRING
      },
      cityCoord: {
        type: Sequelize.JSON
      },
      cityCountry: {
        type: Sequelize.STRING
      },
      cityPopulation: {
        type: Sequelize.INTEGER
      },
      cityTimezone: {
        type: Sequelize.INTEGER
      },
      citySunrise: {
        type: Sequelize.INTEGER
      },
      citySunset: {
        type: Sequelize.INTEGER
      },
      currentTemp: {
        type: Sequelize.FLOAT
      },
      currentFeelsLike: {
        type: Sequelize.FLOAT
      },
      currentTempMin: {
        type: Sequelize.FLOAT
      },
      currentTempMax: {
        type: Sequelize.FLOAT
      },
      currentPressure: {
        type: Sequelize.INTEGER
      },
      currentSeaLevel: {
        type: Sequelize.INTEGER
      },
      currentGrndLevel: {
        type: Sequelize.INTEGER
      },
      currentHumidity: {
        type: Sequelize.INTEGER
      },
      currentTempKf: {
        type: Sequelize.FLOAT
      },
      weatherId: {
        type: Sequelize.INTEGER
      },
      weatherMain: {
        type: Sequelize.STRING
      },
      weatherDescription: {
        type: Sequelize.STRING
      },
      weatherIcon: {
        type: Sequelize.STRING
      },
      cloudsAll: {
        type: Sequelize.INTEGER
      },
      windSpeed: {
        type: Sequelize.FLOAT
      },
      windDeg: {
        type: Sequelize.INTEGER
      },
      windGust: {
        type: Sequelize.FLOAT
      },
      visibility: {
        type: Sequelize.INTEGER
      },
      pop: {
        type: Sequelize.FLOAT
      },
      rain3h: {
        type: Sequelize.FLOAT
      },
      sysPod: {
        type: Sequelize.STRING
      },
      dt: {
        type: Sequelize.BIGINT
      },
      dtTxt: {
        type: Sequelize.STRING
      },
      forecastDate: {
        type: Sequelize.STRING
      },
      forecastTemp: {
        type: Sequelize.FLOAT
      },
      forecastDesc: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pronosticos');
  }
};