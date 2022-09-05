const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const createToken = {
async makeToken(user) {
  const token = jwt.sign({ data: user }, secret);
  return token;
},

async readToken(token) {
  const { data } = jwt.decode(token, secret);
  return data;
},
};

module.exports = createToken;