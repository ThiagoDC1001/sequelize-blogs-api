const { User } = require('../models/index');

const getAllUsers = async () => {
  const result = await User.findAll();
  return result;
};

module.exports = { getAllUsers };