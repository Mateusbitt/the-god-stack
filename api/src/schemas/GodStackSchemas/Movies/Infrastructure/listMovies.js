import { ApolloError } from 'apollo-server'

const listMovies = (ctx, listDeleted=false) => {
  const sql = ctx.knex('movies as m')
    .select(
      'm.id as _id',
      'm.name as _name',
      'm.year as _year',
      'm.photo as _photo',
      'm.deleted as _deleted',
      'm.active as _active',
    )
    .where('m.deleted', '=', listDeleted)
  return (
    ctx.knexnest(sql).then((data) => {
      return data
    })
    .catch((e) => {throw new ApolloError(`Error nesting listMovies: ${e.code} - ${e.message}`, 'knexnest_error')})
  )
}

export default listMovies
