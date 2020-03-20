const userRules = [
  { key: 'name', test: 'length:2:250' },
]

export default (ctx, params) => {
  ctx.validation(params, userRules)
  return true
}
