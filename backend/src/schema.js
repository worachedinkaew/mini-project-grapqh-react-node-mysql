const { gql } = require('apollo-server')

const typeDefs = gql`
    type Book {
        title: String
        author: String
        type: String
    }

    type User {
        id: Int!
        name: String!
        email: String!
    }

    type Query {
        books: [Book]
        getUserById(id: Int!): User
        allUser: [User!]!
    }
`
module.exports = typeDefs