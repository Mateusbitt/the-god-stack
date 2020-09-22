import listMovies from '../../Infrastructure/listMovies'

export default (obj, params, ctx) => {
  ctx.authorization(ctx, 'Movie', params.filters !== undefined ? 'r' : 'b' )
  return listMovies(ctx, params)
}
