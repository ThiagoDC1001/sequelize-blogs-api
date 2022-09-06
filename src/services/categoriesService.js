const models = require('../database/models');

const categoriesService = {
  async create(req, res, _next) {
    const { name } = req.body;
    if (!name) { return res.status(400).json({ messagem: '"name" is required' }); }
    const category = await models.Category.create({ name });
    return category;
  },
};

module.exports = categoriesService;