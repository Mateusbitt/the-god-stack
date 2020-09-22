import { ApolloError } from 'apollo-server'
import listMovies from './listMovies'

const deleteMovie = (ctx, id) => {
  return (
    ctx.knex('movies')
      .update({
        deleted_by: ctx.movie.id,
        deleted_at: ctx.knex.fn.now(),
        deleted: 1,
        active: 0,
      })
      .where('id_Movie', '=', id)
      .then(() => {
        const params = {filters: {id}}
        return listMovies(ctx, params, true)
      })
      .catch((e) => {throw new ApolloError(`deleteMovie: Something went wrong with db: ${e.code} - ${e.message}`, 'database_error')})
  )
}

export default deleteMovie