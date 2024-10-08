const { mergeTypeDefs } = require('@graphql-tools/merge');
const { gql } = require('apollo-server-express');
const productsSchema = require('./productsSchema');
const likesSchema = require('./likesSchema');
const purchasesSchema = require('./purchasesSchema');
const categoriesSchema = require('./categoriesSchema');

const mutationResponseSchema = gql`
  type mutationResponse {
    success: Boolean!
    message: String!
  }
`;

const typeDefs = mergeTypeDefs(
  [
    productsSchema,
    likesSchema,
    purchasesSchema,
    categoriesSchema,
    mutationResponseSchema,
  ]
);

module.exports = typeDefs;