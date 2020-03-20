import { directives } from './_definitions/Directives'
import { Pagination } from './_definitions/Filters/Filters'
import { ActionDomain, ActionQueries } from './Actions/Domain/Actions'
import { MovieDomain, MovieQueries, MovieMutations, MovieInputs } from './Movies/Domain/Movies'
import { ProfileDomain, ProfileQueries } from './Profiles/Domain/Profile'
import { UserDomain, UserQueries, UserMutations, UserInputs } from './Users/Domain/User'

export const typeDefs = `
${directives}

scalar Date
scalar Upload
${ActionDomain}
${ProfileDomain}
${UserDomain}
${MovieDomain}

type Query {
  ${ActionQueries}
  ${ProfileQueries}
  ${UserQueries}
  ${MovieQueries}
}

type Mutation {
  ${UserMutations}
  ${MovieMutations}
}

${UserInputs}
${Pagination}
${MovieInputs}
`
