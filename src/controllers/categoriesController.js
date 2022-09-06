const categoriesService = require('../services/categoriesService');

const categoriesController = {
  async create(req, res) {
    const category = await categoriesService.create(req, res);
    res.status(201).json(category);
  },
};

module.exports = categoriesController;