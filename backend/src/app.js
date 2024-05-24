// src/app.js
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { db } from "./modules/db-module/db.module.js";
import userRouter from "./routes/user.routes.js";
import typeDefs from "./schema/index.js";
import resolvers from "./resolvers/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRouter);

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
}

startServer();

export default app;
