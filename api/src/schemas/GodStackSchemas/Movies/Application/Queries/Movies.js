import listMovies from '../../Infrastructure/listMovies'
import { ApolloError } from 'apollo-server'

export default (obj, params, ctx) => {
  if(!ctx.user.id) throw new ApolloError(`You are not allowed to do that, do not be nasty!`, 'do_not_be_nasty')
  return listMovies(ctx, params)
}
