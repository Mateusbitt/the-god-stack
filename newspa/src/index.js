import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import App from 'components/App'
import { client } from './apolloConfig'

const renderApp = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Suspense>
)

render(renderApp(), document.getElementById('app'))
// export default hot(renderApp)
