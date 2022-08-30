'use strict';
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const createPostCategoryModel = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,    
  }, {
    tableName: 'PostCategories',    
  });  

  postCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categoryId',
      foreignKey: 'id',
      otherKey: 'categoryId'
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'postId',
      foreignKey: 'id',
      otherKey: 'postId'
    })
  }
  return postCategory;
};

module.exports = createPostCategoryModel;