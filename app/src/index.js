/**
 * 
 * GraphQL - REDIS - NODE JS
 * Starter Kit
 * 
 * Credit: https://www.apollographql.com/docs/apollo-server/getting-started/
 */


import dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
import typeDefs from "./modules/schema";
import resolvers from "./modules/resolver";

const server = new ApolloServer({ resolvers, typeDefs });

dotenv.config();

const port = process.env.PORT || 3010;

server.listen(port || 8080).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});