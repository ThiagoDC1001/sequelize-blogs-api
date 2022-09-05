// const Joi = require('joi');
const models = require('../database/models');

const usersService = {

  async getByEmail(email) {    
    const user = await models.User.findOne({ 
      where: { email },
      raw: true,
    });        
    return user;
  },
};

module.exports = usersService;