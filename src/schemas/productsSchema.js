const { gql } = require('apollo-server-express');

const productSchema = gql`
  type Product {
    id: ID!
    name: String!
    categoryId: Int!
    price: Int!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    products(categoryId: Int, price: Int): [Product]
  }

  type Mutation {
    addProduct(name: String!, categoryId: Int!, price: Int!): Product
    updateProduct(id: ID!, name: String, categoryId: Int, price: Int): Product
    deleteProduct(id: ID!): Product
  }
`;

module.exports = productSchema;