const loginSchema = require('./login.schema');

const isLoginValid = (login) => {
  const isValid = loginSchema.validate(login);     
  return isValid;
};

const loginMiddleware = (req, res, next) => {
  const login = req.body;  
  const { error } = isLoginValid(login);  
  if (error) {    
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  next();
};

module.exports = loginMiddleware;