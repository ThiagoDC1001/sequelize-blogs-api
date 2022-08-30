'use strict';
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const createUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'Users',    
  });
  
  User.associate = (models) => {
    User.hasMany(models.BlogPost, 
      { foreignKey: 'displayName', as: 'blogPost'})
  };
  return User;
};

module.exports = createUserModel;