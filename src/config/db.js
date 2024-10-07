const { Sequelize, DataTypes } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DB, 
  process.env.POSTGRES_USER, 
  process.env.POSTGRES_PASSWORD, 
  {
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres'
  }
);

// All models
const Products = require('../models/productsModel')(sequelize, DataTypes);
const Categories = require('../models/categoriesModel')(sequelize, DataTypes);
const Purchases = require('../models/purchasesModel')(sequelize, DataTypes);
const Likes = require('../models/likesModel')(sequelize, DataTypes);

module.exports = {
  sequelize,
  Products,
  Purchases,
  Categories,
  Likes
};