import { gql } from "apollo-server-express"
import { mergeTypes } from "merge-graphql-schemas"

import { Schema as User } from "../../schemas/User/index.js"

export default gql`
  ${mergeTypes([
    User
  ])}
`