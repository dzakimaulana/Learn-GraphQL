const { gql } = require('apollo-server-express');

const likeSchema = gql`
  scalar UUID

  type Like {
    id: ID!
    userId: UUID!
    productId: Int!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    likeAProduct(productId: Int!): [Like]
  }

  type Mutation {
    likeUnlike(userId: UUID!, productId: Int!): mutationResponse!
  }
`;

module.exports = likeSchema;