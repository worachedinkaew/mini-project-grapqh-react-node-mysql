import mergeResolvers from "graphql-merge-resolvers";

import { Query as User_Query } from "../../schemas/User/index.js";

export default mergeResolvers.merge([
  User_Query,
  // User_Mutation
]);
