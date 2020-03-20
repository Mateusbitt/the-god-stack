import { ApolloError } from 'apollo-server'
import listMovies from './listMovies'

const updateMovie = (ctx, { id, movieData }) => {
  return (
    ctx.knex('movies')
      .update({
        name: movieData.name,
        description: movieData.description,
        year: movieData.year,
        updated_by: ctx.user.id,
      })
      .where('id_movie', '=', id)
      .then(() => {
        const params = {filters: {id}}
        return listMovies(ctx, params)
      })
      .catch((e) => {throw new ApolloError(`Something went wrong with db: ${e.code} - ${e.message}`, 'database_error')})
  )
}

export default updateMovie
