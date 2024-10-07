const { gql } = require('apollo-server-express');

const purchaseSchema = gql`
  scalar UUID

  type Purchase {
    id: ID!
    userId: UUID!
    productID: Int!
    rating: Float!
    comment: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    personalPurchase(userId: UUID!): [Purchase]
    purchaseInProduct(productId: Int!): [Purchase]
    ratingInProduct(productId: Int!): Int
  }

  type Mutation {
    addProduct(name: String!, categoryId: Int!, price: Int!): Product
    updateProduct(id: ID!, name: String, categoryId: Int, price: Int): Product
    deleteProduct(id: ID!): Product
  }
`;

module.exports = purchaseSchema;