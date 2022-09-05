const usersService = require('../services/userService');
const createToken = require('../helpers/createToken');

const userController = {
/** @type {import('express').RequestHandler} */
  async createUser(req, res) {
    const user = req.body;    
    const existUser = await usersService.getByEmail(user.email);
    if (existUser) { return res.status(409).json({ message: 'User already registered' }); }
    await usersService.createUser(user);
    const token = await createToken.makeToken(user);
    res.status(201).json({ token });
  },
};

module.exports = userController;