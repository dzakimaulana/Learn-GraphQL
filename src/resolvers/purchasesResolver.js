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
    },
    ratingInProduct: async (_, { productId }) => {
      try {
        const purchases = await Purchases.findAll({
          where: {
            productId: productId
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
  },
  Mutation: {
    addPurchase: async (_, { userId, productId, rating, comment }) => {
      try {
        await Purchases.create({ userId, productId, rating, comment })
        return {
          success: true,
          message: "Success add purchase"
        }
      } catch (error) {
        throw new Error('Error add purchase');
      }
    },
  }  
}

module.exports = purchaseResolver;



