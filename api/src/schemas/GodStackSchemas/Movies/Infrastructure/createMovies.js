import { ApolloError } from 'apollo-server'
import listMovies from './listMovies'

const createMovie = ({ movieData }, ctx) => {
  return (
    ctx.knex('movies')
      .insert({
        name: movieData.name,
        year: movieData.year,
        photo: movieData.photo,
        created_by: ctx.movie.id,
        updated_by: ctx.movie.id,
        deleted: 0,
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