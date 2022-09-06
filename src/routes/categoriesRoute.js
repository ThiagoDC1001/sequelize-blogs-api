const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const middleware = require('../middlewares');

const categoriesRoute = Router();

categoriesRoute.post('/categories', 
middleware.tokenMiddleware, 
middleware.categoriesMiddleware, 
categoriesController.create);

categoriesRoute.get('/categories', middleware.tokenMiddleware, categoriesController.getAll);

module.exports = categoriesRoute;