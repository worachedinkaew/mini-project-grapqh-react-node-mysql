const bcrypt = require('bcryptjs')

const resolvers = {
    Query: {
        async getUserById(root, { id }, { models }) {
            return models.User.findByPk(id)
        },
        async allUser(root, args, { models }) {
            return models.User.findAll()
        },
    },
    Mutation: {
        async createUser (root, { name, email, password }, { models }) {
            return models.User.create({
                name,
                email,
                password: await bcrypt.hash(password, 10)
              })
        },
    },
};

module.exports = resolvers;