import { ApolloError } from 'apollo-server'
import createMovie from '../../Infrastructure/createMovie'
import updateMovie from '../../Infrastructure/updateMovie'
import deleteMovie from '../../Infrastructure/deleteMovie'
import validator from '../_validator'

export default (obj, params, ctx) => {
  if(!ctx.user.id) throw new ApolloError(`You are not allowed to do that, do not be nasty!`, 'do_not_be_nasty')
  
  if (!params.deleteIt) {
    // params.id ? ctx.authorization(ctx, 'Users', 'e') : ctx.authorization(ctx, 'Users', 'a')
    validator(ctx, params.movieData)
    return params.id ? updateMovie(ctx, params) : createMovie(ctx, params)
  }
  if (params.id) {
    // ctx.authorization(ctx, 'Users', 'd')
    return deleteMovie(ctx, params.id)
  }
  return null
}
