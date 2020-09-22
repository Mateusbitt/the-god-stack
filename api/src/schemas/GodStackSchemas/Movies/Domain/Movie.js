/* Descrição do Domain
--Queries
--Mutations
--Subscriptions
--Inputs
*/

//Queri sempre retorna um array

export const MovieDomain = `
  type Movie {
    id: Int
    name: String!
    year: Int!
    photo: String!
  }
`
//movie queris = input
export const MovieQueries = `
  Movies(
    filters: moviesFilters 
  ): [Movie]
`

export const MovieMutation = `
  MergeMovie (
    id: Int
    deleteIt: Boolean
    movieInput: movieInput
  ) : [Movie]
`

export const MovieSubscriptions = `

`
//movie input, falar com Breno se precisa de Id.. linha 45
export const MovieInputs = `
  input moviesFilters{
    id: Int
    name: String
    year: Int
  }  

  input movieInput{
  
    name: String!
    year: Int!
    photo: String!
  }
  
`
