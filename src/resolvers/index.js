const { mergeResolvers } = require('@graphql-tools/merge');
const categryResolver = require('./categoriesResolver');

const resolvers = mergeResolvers([
  categryResolver,
]);

module.exports = resolvers;
