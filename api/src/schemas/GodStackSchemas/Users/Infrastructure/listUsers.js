import { ApolloError } from 'apollo-server'

const listUSers = (ctx, params, listDeleted=false) => {
  const sql = ctx.knex('users as u')
    .select(
      'u.id_user as _id',
      'u.email as _email',
      'u.givenName as _givenName',
      'u.familyName as _familyName',
      'u.password as password',
      'u.language as language',
      'u.deleted as _deleted',
      'u.active as _active',
      'p.id_user_profile as _profiles__id',
      'p.name as _profiles__name',
      'p.slug as _profiles__slug',
      'a.id_user_action as _profiles__actions__id',
      'a.name as _profiles__actions__name',
      'a.description as _profiles__actions__description',
      'a.type as _profiles__actions__type',
    )
    .join('users_profiles as p', 'u.id_user_profile', '=', 'p.id_user_profile')
    .join('profiles_actions_users as pivot', 'pivot.id_user_profile', 'p.id_user_profile')
    .join('users_actions as a', 'pivot.id_user_action', 'a.id_user_action')
    .join(
      ctx.knex('users as u2').select('u2.id_user as lids')
        .join('users_profiles as p2', 'u2.id_user_profile', 'p2.id_user_profile' )
        .join('profiles_actions_users as pivot2', 'pivot2.id_user_profile', 'p2.id_user_profile')
        .join('users_actions as a2', 'pivot2.id_user_action', 'a2.id_user_action')
        .where('p2.id_user_profile', '>=', ctx.user.profiles[0].id)
        .modify(function(queryBuilder) {
          if (params.filters && params.filters.givenName) {
              queryBuilder.where('u2.givenName', 'like', `%${params.filters.givenName}%`)
          }
        })
        .modify(function(queryBuilder) {
          if (params.filters && params.filters.familyName) {
              queryBuilder.where('u2.familyName', 'like', `%${params.filters.familyName}%`)
          }
        })
        .modify(function(queryBuilder) {
          if (params.filters && params.filters.email) {
              queryBuilder.where('u2.email', 'like', `%${params.filters.email}%`)
          }
        })
        .modify(function(queryBuilder) {
          if (params.filters && params.filters.id) {
              queryBuilder.where('u2.id_user', '=', params.filters.id)
          }
        })
        .groupBy('u2.id_user')
        .limit(params.pagination && params.pagination.limit ? params.pagination.limit : 250)
        .offset(params.pagination && params.pagination.offset ? params.pagination.offset : 0)
        .as('x'),
      'x.lids',
      'u.id_user',
    )
    .where('u.deleted', '=', listDeleted)
  return (
    ctx.knexnest(sql).then((data) => {
      return data
    })
    .catch((e) => {throw new ApolloError(`Error nesting listUSers: ${e.code} - ${e.message}`, 'knexnest_error')})
  )
}

export default listUSers
