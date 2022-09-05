const { Router } = require('express');
const userController = require('../controllers/userController');
const middleware = require('../middlewares');

const userRoute = Router();

userRoute.post('/user', middleware.userMiddleware, userController.createUser);

module.exports = userRoute;