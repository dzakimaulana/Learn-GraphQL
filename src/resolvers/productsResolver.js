const { Op } = require('sequelize');
const { Products } = require('../config/db');

const productResolver = {
  Query: {
    products: async (_, { categoryId, price }) => {
      try {
        const conditions = {};

        if (conditions) conditions.categoryId = categoryId;
        if (price) conditions.price = { [Op.lte]: price };

        return await Products.findAll({
          where: conditions
        });
      } catch (error) {
        throw new Error('Unable to find products');
      }
    }
  },
  Mutation: {
    addProduct: async (_, { name, categoryId, price }) => {
      try {
        await Products.create({ name, categoryId, price });
        return {
          success: true,
          message: "Success add product"
        };
      } catch (error) {
        throw new Error('Error add product');
      }
    },
    updateProduct: async (_, { id, name, category, price }) => {
      try {
        const product = await Products.findByPk(id);
        if (!product) {
          return {
            success: false,
            message: "Product not found"
          };
        }

        if (name !== undefined) product.name = name;
        if (category !== undefined) product.category = category;
        if (price !== undefined && typeof price === "number") product.price = price;
        
        await product.save();

        return {
          success: true,
          message: "Product edited"
        };
      } catch (error) {
        throw new Error('Error update product');
      }
    },
    deleteProduct: async (_, { id }) => {
      try {
        const product = await Products.findByPk(id);
        if (!product) {
          return {
            success: false,
            message: "Product not found"
          }
        }
        await product.destroy();

        return {
          success: true,
          message: "Success delete product"
        };
      } catch (error) {
        throw new Error('Error delete product');
      }
    }
  }  
}

module.exports = productResolver;



