import { ApolloError } from 'apollo-server'

const listMovies = (ctx, params) => {
  const sql = ctx.knex('movies as m')
    .select(
      'm.id_movie as _id',
      'm.name as _name',
      'm.description as _description',
      'm.year as _year',
      'm.deleted as _softDeleted',
    )
    if(params.filter && params.filter.id) sql.where('m.id_movie', '=', params.filter.id)
    if(params.filter && params.filter.name) sql.where('m.name', 'like', `%${params.filter.name}%`)
    if(params.filter && !params.filter.softDeleted) sql.where('m.deleted', '=', 0)
  return (
    ctx.knexnest(sql)
        .then((data) => {
        return data
      })
      .catch((e) => {throw new ApolloError(`Error nesting listMovies: ${e.code} - ${e.message}`, 'knexnest_error')})
  )
}

export default listMovies
