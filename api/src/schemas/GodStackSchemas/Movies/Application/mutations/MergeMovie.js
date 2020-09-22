import createMovies from '../../Infrastructure/createMovies'
import deleteMovies from '../../Infrastructure/deleteMovies'
import updateMovies from '../../Infrastructure/updateMovies'
import validator from '../_validator/index'

export default (obj, { movieInput, id, deleteIt }, ctx) => {
  if (!deleteIt) {
    // id ? ctx.authorization(ctx, 'Users', 'e') : ctx.authorization(ctx, 'Users', 'a')
    validator(ctx, movieInput)
    return id ? updateMovies(movieInput, ctx) : createMovies(movieInput, ctx)
  }
  if (id) {
    // ctx.authorization(ctx, 'Users', 'd')
    return deleteMovies(ctx, id)
  }
  return null
}