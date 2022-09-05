const Joi = require('joi');

const authService = {
  async validateBodyLogin(email) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().required(),
    });
    const result = await schema.validateAsync(email);    
    return result;
  },
  
};

module.exports = authService;