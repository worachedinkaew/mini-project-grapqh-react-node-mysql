export default `
    
    type User {
        id: Int!
        name: String!
        email: String!
    }

    type Query {
        getUserById(id: Int!): User
        allUser: [User!]!
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!): User!
    }
`
// module.exports = typeDefs