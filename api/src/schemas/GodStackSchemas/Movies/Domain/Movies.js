/* Definition */
export const MovieDomain = `
type Movie {
  id: Int
  name: String!
  description: String
  year: Int!
  softDeleted: Boolean
}
`

/* QUERIES */
export const MovieQueries = `
  Movies(
    filters: inputMovie
  ): [Movie]
`

/* MUTATIONS */
export const MovieMutations = `
  MergeMovie(
    id: Int
    deleteIt: Boolean
    movieData: movieData
  ): [Movie]
`

/* SUBSCRIPTIONS */

/* INPUTS */
export const MovieInputs = `
  input inputMovie {
    id: Int
    name: String
    softDeleted: Boolean
  }

  input movieData {
    name: String!
    description: String
    year: Int!
  }
`