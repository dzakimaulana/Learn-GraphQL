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
    categoryName(id: ID!): Category!
  }

  type Mutation {
    addCategory(name: String!): Category!
    updateCategory(id: ID!, name: String): Category!
    deleteCategory(id: ID!): Category!
  }
`;

module.exports = categorySchema;