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
    purchaseInProduct(productId: Int!): [Purchase]
    userPurchase(userId: UUID!): [Purchase]
    ratingInProduct(productId: Int!): Float!
  }

  type Mutation {
    addPurchase(userId: UUID!, productId: Int!, rating: Float!, comment: String): mutationResponse!
  }
`;

module.exports = purchaseSchema;