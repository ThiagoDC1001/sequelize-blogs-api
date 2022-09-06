const categoriesService = require('../services/categoriesService');

const categoriesController = {
  async create(req, res) {
    const category = await categoriesService.create(req, res);
    res.status(201).json(category);
  },

  async getAll(_req, res) {
    const categories = await categoriesService.getAll();
    res.status(200).json(categories);
  },
};

module.exports = categoriesController;