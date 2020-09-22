const movieRules = [
  { key: 'name', test: 'length:2:150' },
  { key: 'year', test: 'length:2:4' },
  { key: 'photo', test: 'length:10:256'},
]

export default (ctx, params) => {
  ctx.validation(params, movieRules)  
  return true
}