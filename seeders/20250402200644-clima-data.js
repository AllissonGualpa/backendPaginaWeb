'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('climas', [
      {
        name: 'Guayaquil',
        temp: 28.5,
        description: 'Parcialmente nublado',
        humidity: 65,
        wind_speed: 12.3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Quito',
        temp: 18.2,
        description: 'Lluvia ligera',
        humidity: 82,
        wind_speed: 5.7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cuenca',
        temp: 20.1,
        description: 'Soleado',
        humidity: 58,
        wind_speed: 8.4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manta',
        temp: 26.8,
        description: 'Nublado',
        humidity: 74,
        wind_speed: 15.2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ambato',
        temp: 16.5,
        description: 'Niebla',
        humidity: 90,
        wind_speed: 3.1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('climas', null, {});
  }
};
