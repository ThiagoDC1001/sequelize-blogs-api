const loginMiddleware = require('./loginMiddleware');
const userMiddleware = require('./userMiddleware');
const tokenMiddleware = require('./tokenMiddleware');
const categoriesMiddleware = require('./categoriesMiddleware');

module.exports = {
  loginMiddleware,
  userMiddleware,
  tokenMiddleware,
  categoriesMiddleware,
};