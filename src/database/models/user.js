'use strict';
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const createUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'Users',    
  });  
  return User;
};

module.exports = createUserModel;