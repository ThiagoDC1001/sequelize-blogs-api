const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const tokenMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });    
  }
  try {
    const jwtVerify = jwt.verify(authorization, secret);
    req.user = jwtVerify;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenMiddleware;