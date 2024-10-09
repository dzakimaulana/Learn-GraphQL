const { Purchases } = require('../config/db');

const purchaseResolver = {
  Query: {
    userPurchase: async (_, { userId }) => {
      try {
        return await Purchases.findAll({
          where: {
            userId: userId
          }
        });
      } catch (error) {
        throw new Error('Unable to find products');
      }
    },
    purchaseInProduct: async (_, { productId }) => {
      try {
        return await Purchases.findAll({
          where: {
            productId: productId
          }
        });
      } catch (error) {
        throw new Error('Unable to find products');
      }
    }
  },
  Mutation: {
    addPurchase: async (_, { userId, productId, rating, comment }) => {
      try {
        rating = (rating % 5 === 0) ? 5 : rating % 5;
        await Purchases.create({ userId, productId, rating, comment })
        return {
          success: true,
          message: "Success add purchase"
        }
      } catch (error) {
        throw new Error('Error add purchase');
      }
    },
  },
  Product: {
    purchased: async (parent) => {
      try {
        return await Purchases.count({
          where: {
            productId: parent.id
          }
        })
      } catch (error) {
        throw new Error('Error get purchased');
      }
    },
  rating: async (parent) => {
      try {
        const purchases = await Purchases.findAll({
          where: {
            productId: parent.id
          },
          attributes: ['rating']
        });

        if (purchases.length === 0) {
          return 0;
        }

        const totalRating = purchases.reduce((sum, purchase) => sum + purchase.rating, 0);
        const averageRating = totalRating / purchases.length;
        
        return averageRating;
      } catch (error) {
        throw new Error('Unable to find products');
      }
    }
  }
}

module.exports = purchaseResolver;



