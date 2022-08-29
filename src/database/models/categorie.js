'use strict';
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const createCategorieModel = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    name: DataTypes.STRING,    
  }, {
    tableName: 'Categories',    
  });  
  return Categorie;
};

module.exports = createCategorieModel;