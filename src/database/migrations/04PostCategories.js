'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('PostCategories', {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'postId',
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'categoryId',
        references: {
          model: 'Categories',
          key: 'id',
        },
        primaryKey: true,
      },   
    });  
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('PostCategories')
  }
};