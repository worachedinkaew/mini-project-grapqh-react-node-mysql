// const { ApolloServer, gql } = require('apollo-server');
// const typeDefs = require('./src/schema.js');
// const resolvers = require('./src/resolvers.js');
// const models = require('./src/models');

// import typeDefs from "./src/schema.js"
// import resolvers from "./src/resolvers.js"

import { ApolloServer, gql } from "apollo-server-express";
// import models from "./src/models/index.js"

//import TypeDefs and Resolvers

import typeDefs from "./src/apollo/typeDefs.js";
import resolvers from "./src/apollo/resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    req,
    res,
  }),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
