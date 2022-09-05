const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const createToken = {
async makeToken(user) {
  const jwtconfig = { expiresIn: '7d', algorithm: 'HS256' };
  const { email } = user;  
  const token = jwt.sign({ data: email }, secret, jwtconfig);
  return token;
},

async readToken(token) {
  const { data } = jwt.decode(token, secret);
  return data.dataValues;
},
};

module.exports = createToken;