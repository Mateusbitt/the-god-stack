import Date from './_definitions/Scalars/Date'
import { GraphQLUpload } from 'graphql-upload'
import Actions from './Actions/Application/Queries/Actions'
import Profiles from './Profiles/Application/Queries/Profiles'
import Users from './Users/Application/Queries/Users'
import MergeUser from './Users/Application/Mutations/MergeUser'
import ToggleUser from './Users/Application/Mutations/ToggleUser'
import UserLogin from './Users/Application/Queries/UserLogin'
import RefreshToken from './Users/Application/Queries/RefreshToken'
import Movies from './Movies/Application/Queries/Movies'
import MergeMovie from './Movies/Application/Mutations/MergeMovie'

export const resolvers = {
  Query: {
    Actions,  
    Profiles,
    Users,
    UserLogin,
    RefreshToken,
    Movies,
  },
  Mutation: {
    MergeUser,
    ToggleUser,
    MergeMovie,
  },
  Date,
  Upload: GraphQLUpload,
}
