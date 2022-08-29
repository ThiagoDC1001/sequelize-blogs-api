'use strict';
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const createBlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('blogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.STRING,    
  }, {
    tableName: 'BlogPost',    
  });  
  return BlogPost;
};

module.exports = BlogPost;