'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('BlogPosts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,        
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      published: {
        type: Sequelize.DATE,
        allowNull: false,
        // field: 'created_at'?
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false,
        // field: 'updated_at'?
      },      
    });  
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('BlogPosts')
  }
};