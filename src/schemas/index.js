const { mergeTypeDefs } = require('@graphql-tools/merge');
const productsSchema = require('./productsSchema');
const likesSchema = require('./likesSchema');
const purchasestSchema = require('./productsSchema');
const categoriesSchema = require('./categoriesSchema');

const typeDefs = mergeTypeDefs(
  [
    productsSchema,
    likesSchema,
    purchasestSchema,
    categoriesSchema,
  ]
);

module.exports = typeDefs;