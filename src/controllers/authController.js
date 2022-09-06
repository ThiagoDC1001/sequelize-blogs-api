const createToken = require('../helpers/createToken');
const authService = require('../services/authService');
const usersService = require('../services/userService');

const authController = {
  /** @type {import('express').RequestHandler} */
  async login(req, res) {    
    const data = await authService.validateBodyLogin(req.body);     
    const user = await usersService.getByEmail(data.email);       
    if (!user) { return res.status(400).json({ message: 'Invalid fields' }); }
    const token = await createToken.makeToken(user);
    res.json({ token });
  },
};

module.exports = authController;