import { ApolloError } from 'apollo-server'
import listMovies from './listMovies'

const createMovie = (ctx, { movieData }) => {
  return (
    ctx.knex('movies')
      .insert({
        id_movie: null,
        name: movieData.name,
        description: movieData.description,
        year: movieData.year,
        created_by: ctx.user.id,
        updated_by: ctx.user.id,
      }, 'id')
      .then(data => {
        if(!data[0]) return null
        const params = {filters: {id:data[0]}}
        return listMovies(ctx, params)
      })
      .catch(e => {
        if (e.code === 'ER_DUP_ENTRY') { throw new ApolloError('createMovie: This movie is already registered!', 'duplicated', [e.sqlMessage]) }
        throw new ApolloError(`createMovie: Something went wrong with db: ${e.code} - ${e.message}`, 'database_error')
      })
  )
}

export default createMovie
