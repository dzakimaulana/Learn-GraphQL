const { gql } = require('apollo-server-express');

const categorySchema = gql`
  type Category {
    id: ID!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    allCategories: [Category!]!
  }

  type Mutation {
    addCategory(name: String!): mutationResponse!
    updateCategory(id: ID!, name: String): mutationResponse!
    deleteCategory(id: ID!): mutationResponse!
  }
`;

module.exports = categorySchema;