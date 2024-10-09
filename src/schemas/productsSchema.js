const { gql } = require('apollo-server-express');

const productSchema = gql`
  type Product {
    id: ID!
    name: String!
    category: String!
    price: Int!
    likes: Int!
    rating: Float!
    purchased: Int!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    products(categoryId: Int, price: Int): [Product!]!
  }

  type Mutation {
    addProduct(name: String!, categoryId: Int!, price: Int!): mutationResponse!
    updateProduct(id: ID!, name: String, categoryId: Int, price: Int): mutationResponse!
    deleteProduct(id: ID!): mutationResponse!
  }
`;

module.exports = productSchema;