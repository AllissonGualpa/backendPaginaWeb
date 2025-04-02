'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date(); // Definimos una variable 'now' para usar en todo el seed
    
    await queryInterface.bulkInsert('pronosticos', [{
      cod: '200',
      message: 0,
      cnt: 40,
      list: JSON.stringify([
        {
          dt: Math.floor(now / 1000),
          main: {
            temp: 28.5,
            feels_like: 30.2,
            temp_min: 26.8,
            temp_max: 29.7,
            pressure: 1012,
            humidity: 65
          },
          weather: [{
            id: 800,
            main: 'Clear',
            description: 'cielo despejado',
            icon: '01d'
          }],
          clouds: { all: 0 },
          wind: { speed: 3.1, deg: 120 },
          visibility: 10000,
          pop: 0,
          dt_txt: now.toISOString()
        }
      ]),
      city: JSON.stringify({
        id: 3657509,
        name: 'Guayaquil',
        coord: { lat: -2.1667, lon: -79.9 },
        country: 'EC',
        population: 1952029,
        timezone: -18000,
        sunrise: Math.floor(new Date(now).setHours(6, 0, 0) / 1000),
        sunset: Math.floor(new Date(now).setHours(18, 0, 0) / 1000)
      }),
      cityId: 3657509,
      cityName: 'Guayaquil',
      cityCoord: JSON.stringify({ lat: -2.1667, lon: -79.9 }),
      cityCountry: 'EC',
      cityPopulation: 1952029,
      cityTimezone: -18000,
      citySunrise: Math.floor(new Date(now).setHours(6, 0, 0) / 1000),
      citySunset: Math.floor(new Date(now).setHours(18, 0, 0) / 1000),
      currentTemp: 28.5,
      currentFeelsLike: 30.2,
      currentTempMin: 26.8,
      currentTempMax: 29.7,
      currentPressure: 1012,
      currentSeaLevel: 1012,
      currentGrndLevel: 1010,
      currentHumidity: 65,
      currentTempKf: 1.2,
      weatherId: 800,
      weatherMain: 'Clear',
      weatherDescription: 'cielo despejado',
      weatherIcon: '01d',
      cloudsAll: 0,
      windSpeed: 3.1,
      windDeg: 120,
      windGust: 4.2,
      visibility: 10000,
      pop: 0,
      rain3h: 0,
      sysPod: 'd',
      dt: Math.floor(now / 1000),
      dtTxt: now.toISOString(),
      forecastDate: now.toISOString().split('T')[0],
      forecastTemp: 28.5,
      forecastDesc: 'cielo despejado',
      createdAt: now,
      updatedAt: now
    }, {
      cod: '200',
      message: 0,
      cnt: 40,
      list: JSON.stringify([
        {
          dt: Math.floor(now / 1000) + 86400,
          main: {
            temp: 27.8,
            feels_like: 29.5,
            temp_min: 26.1,
            temp_max: 28.9,
            pressure: 1013,
            humidity: 70
          },
          weather: [{
            id: 500,
            main: 'Rain',
            description: 'lluvia ligera',
            icon: '10d'
          }],
          clouds: { all: 40 },
          wind: { speed: 2.5, deg: 150 },
          visibility: 8000,
          pop: 0.4,
          rain: { '3h': 1.2 },
          dt_txt: new Date(now.getTime() + 86400000).toISOString()
        }
      ]),
      city: JSON.stringify({
        id: 3652462,
        name: 'Quito',
        coord: { lat: -0.2299, lon: -78.5249 },
        country: 'EC',
        population: 1619146,
        timezone: -18000,
        sunrise: Math.floor(new Date(now).setHours(6, 10, 0) / 1000),
        sunset: Math.floor(new Date(now).setHours(18, 15, 0) / 1000)
      }),
      cityId: 3652462,
      cityName: 'Quito',
      cityCoord: JSON.stringify({ lat: -0.2299, lon: -78.5249 }),
      cityCountry: 'EC',
      cityPopulation: 1619146,
      cityTimezone: -18000,
      citySunrise: Math.floor(new Date(now).setHours(6, 10, 0) / 1000),
      citySunset: Math.floor(new Date(now).setHours(18, 15, 0) / 1000),
      currentTemp: 18.2,
      currentFeelsLike: 19.5,
      currentTempMin: 16.8,
      currentTempMax: 19.7,
      currentPressure: 850,
      currentSeaLevel: 850,
      currentGrndLevel: 830,
      currentHumidity: 75,
      currentTempKf: 0.8,
      weatherId: 500,
      weatherMain: 'Rain',
      weatherDescription: 'lluvia ligera',
      weatherIcon: '10d',
      cloudsAll: 40,
      windSpeed: 2.5,
      windDeg: 150,
      windGust: 3.8,
      visibility: 8000,
      pop: 0.4,
      rain3h: 1.2,
      sysPod: 'd',
      dt: Math.floor(now / 1000) + 86400,
      dtTxt: new Date(now.getTime() + 86400000).toISOString(),
      forecastDate: new Date(now.getTime() + 86400000).toISOString().split('T')[0],
      forecastTemp: 27.8,
      forecastDesc: 'lluvia ligera',
      createdAt: now,
      updatedAt: now
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pronosticos', null, {});
  }
};