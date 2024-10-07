const { Categories } = require('../config/db');

const categoryResolver = {
  Query: {

    categoryName: async (_, { id }) => {
      return await Categories.findByPk(id);
    },
    allCategories: async () => {
      return await Categories.findAll();
    }
  },
  Mutation: {
    addCategory: async (_, { name }) => {
      const category = await Categories.create({ name })
      return category
    },
    updateCategory: async (_, { id, name }) => {
      const category = await Categories.findByPk(id);
      if (!category) throw new Error("Product not found");

      if (name !== undefined) category.name = name;
      await category.save();

      return category;
    },
    deleteCategory: async (_, { id }) => {
      const category = await Categories.findByPk(id);
      if (!category) throw new Error("Product not found");

      await category.destroy();

      return category;
    }
  }
}

module.exports = categoryResolver;



