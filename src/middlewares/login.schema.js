const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().required().email()
.messages({
    'any.required': '400|Some required fields are missing',   
    'string.empty': '400|Some required fields are missing',   
  }),
  password: Joi.string().required().messages({
    'any.required': '400|Some required fields are missing',
    'string.empty': '400|Some required fields are missing',   
  }),
});

module.exports = loginSchema;