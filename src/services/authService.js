const jwt = require('jsonwebtoken');
const Joi = require('joi');

const secret = process.env.JWT_SECRET;

const authService = {
  async validateBodyLogin(email) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().required(),
    });
    const result = await schema.validateAsync(email);    
    return result;
  },

  async makeToken(user) {
    const token = jwt.sign({ data: user }, secret);
    return token;
  },

  async readToken(token) {
    const { data } = jwt.decode(token, secret);
    return data;
  },
};

module.exports = authService;