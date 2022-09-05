const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().required().min(8).messages({
    'any.string': '500|Erro no displayName',
    'any.required': '500|Erro no required displayName',
    'string.min': '400|"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'any.string': '500|Erro no email',
    'any.required': '500|Erro no required email',
    'string.email': '400|"email" must be a valid email',
  }),
  password: Joi.string().min(6).messages({
    'any.string': '500|Erro no senha',
    'any.required': '500|Erro no required senha',
    'string.min': '400|"password" length must be at least 6 characters long',
  }),
  image: Joi.string(),
});

module.exports = userSchema;