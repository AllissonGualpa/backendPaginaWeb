'use strict';
const bcrypt = require('bcrypt'); // Importar bcrypt

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    // Encriptar contraseñas
    const hashedPasswords = {
      allisson123: await bcrypt.hash('allisson123', 10),
      arianna123: await bcrypt.hash('arianna123', 10),
      anthony123: await bcrypt.hash('anthony123', 10),
    };

    await queryInterface.bulkInsert('users', [
      {
        name: 'Allisson Gualpa',
        email: 'allisson.gualpa@example.com',
        password: hashedPasswords.allisson123,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Arianna Barrera',
        email: 'arianna.barrera@example.com',
        password: hashedPasswords.arianna123,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Anthony Mora',
        email: 'anthony.mora@example.com',
        password: hashedPasswords.anthony123,
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('userFav', null, {});
    await queryInterface.bulkDelete('userClima', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};