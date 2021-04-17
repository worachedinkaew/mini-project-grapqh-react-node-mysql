import { gql } from "apollo-server-express"
import { mergeTypes } from "merge-graphql-schemas"

import User_TypeDefs from "../apollo/User/User_TypeDefs.js"

export default gql`
  ${mergeTypes([
    User_TypeDefs
])}
`
