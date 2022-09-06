const userService = require('../services/userService');
const createToken = require('../helpers/createToken');

const userController = {
/** @type {import('express').RequestHandler} */
  async createUser(req, res) {
    const user = req.body;  
    console.log(user);      
    const existUser = await userService.getByEmail(user.email);    
    if (existUser) { return res.status(409).json({ message: 'User already registered' }); }
    await userService.createUser(user);
    const token = await createToken.makeToken(user);
    res.status(201).json({ token });
  },

  async getAll(_req, res) {
    const users = await userService.getAll();    
    res.status(200).json(users);
  },

  async getById(req, res) {
    const { id } = req.params;    
    const userById = await userService.getById(id);
    if (!userById) { return res.status(404).json({ message: 'User does not exist' }); }
    return res.status(200).json(userById);
  },
};

module.exports = userController;