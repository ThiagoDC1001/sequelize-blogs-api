'use strict';
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const createCategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,        
  }, {
    timestamps: false,
    tableName: 'Categories',    
  });  
  return Category;
};

module.exports = createCategoryModel;