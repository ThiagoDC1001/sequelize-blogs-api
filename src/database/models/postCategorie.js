'use strict';
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const createPostCategoryModel = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: DataTypes.STRING,
    categoryId: DataTypes.STRING,    
  }, {
    tableName: 'PostCategories',    
  });  
  return postCategory;
};

module.exports = createPostCategoryModel;