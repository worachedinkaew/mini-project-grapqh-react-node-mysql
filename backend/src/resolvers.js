const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
        type: 'A',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
        type: 'B',
    },
];

const resolvers = {
    Query: {
        books: () => books,
        async getUserById(root, { id }, { models }) {
            return models.User.findByPk(id)
        },
        async allUser(root, args, { models }) {
            return models.User.findAll()
        },
    },
};

module.exports = resolvers;