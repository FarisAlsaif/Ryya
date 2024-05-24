import { gql } from "apollo-server-express";
import userSchema from "./user.schema.js";

const typeDefs = gql`
  ${userSchema}
`;

export default typeDefs;
