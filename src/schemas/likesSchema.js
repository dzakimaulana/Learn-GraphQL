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
    totalLikes(productId: Int!): Int
    likeAProduct: [Like]
  }

  type Mutation {
    addLike(productId: Int!): Like
    deleteLike(productId: Int!): Like
  }
`;

module.exports = likeSchema;