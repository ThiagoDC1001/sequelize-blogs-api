const authService = require('../services/authService');
const usersService = require('../services/userService');

const authController = {
  /** @type {import('express').RequestHandler} */
  async login(req, res) {    
    const data = await authService.validateBodyLogin(req.body);
    if (!data) { return console.log('erro aqui'); }       
    const user = await usersService.getByEmail(data.email);      
    if (!user) { return res.status(400).json({ message: 'Invalid fields' }); }
    const token = await authService.makeToken(user);
    res.json({ token });
  },
};

module.exports = authController;