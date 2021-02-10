const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./src/schema.js');
const resolvers = require('./src/resolvers.js');
const models = require('./src/models')

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});



