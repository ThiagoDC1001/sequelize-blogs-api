'use strict';

module.exports = {
  /**
 * @param {import('sequelize').queryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      displayName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'displayName'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
        //* se for necessário alterar pra false *//
      }   
    });  
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users')
  }
};