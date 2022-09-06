const Joi = require('joi');

const categoriesSchema = Joi.object({
  name: Joi.string().required()
  .messages({
    'any.string': '500|Erro na string Categories',
    'any.required': '400|"name" is required',
  }),
});

const nameValidate = (req, res, next) => {
  const name = req.body;  
  const { error } = categoriesSchema.validate(name);
  console.log(error);
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  next();
};

module.exports = nameValidate;