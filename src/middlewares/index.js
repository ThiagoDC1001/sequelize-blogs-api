const loginMiddleware = require('./loginMiddleware');
const userMiddleware = require('./userMiddleware');
const tokenMiddleware = require('./tokenMiddleware');

module.exports = {
  loginMiddleware,
  userMiddleware,
  tokenMiddleware,
};