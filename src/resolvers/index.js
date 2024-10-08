const { mergeResolvers } = require('@graphql-tools/merge');
const categoriesResolver = require('./categoriesResolver');
const likesResolver = require('./likesResolver');
const productsResolver = require('./productsResolver');
const purchasesResolver = require('./purchasesResolver');

const resolvers = mergeResolvers([
  categoriesResolver,
  likesResolver,
  productsResolver,
  purchasesResolver
]);

module.exports = resolvers;
