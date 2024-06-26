import { gql } from "apollo-server-express";

const userSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    updateUser(id: ID!, name: String!, email: String!, password: String!): User
    deleteUser(id: ID!): User
  }
`;

export default userSchema;
