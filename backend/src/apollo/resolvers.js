import mergeResolvers from "graphql-merge-resolvers"

import User_Resolvers from "./User/User_Resolvers.js"

export default mergeResolvers.merge([
    User_Resolvers
])
