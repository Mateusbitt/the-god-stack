import { ApolloError } from 'apollo-server'
import listMovies from './listMovies'

const updateMovie = ({movieData,id}, ctx) => {
  return (
    ctx.knex('movies')
      .update({
        name: movieData.name,
        year: movieData.year,
        photo: movieData.photo,
        updated_by: ctx.movie.id,
      })
      .where('id_movie', '=', id)
      .then(() => {
        const params = {filters: {id}}
        return listMovies(ctx, params)
      })
      .catch((e) => {throw new ApolloError(`updateMovie: Something went wrong with db: ${e.code} - ${e.message}`, 'database_error')})
  )
}

export default updateMovie