const userSchema = require('./user.schema');

const isUserValid = (user) => {
  const isValid = userSchema.validate(user);  
  return isValid;
};

const userMiddleware = (req, res, next) => {
  const user = req.body;  
  const { error } = isUserValid(user);  
  if (error) {    
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  next();
};

module.exports = userMiddleware;
