import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, GlobalStyle } from 'styles'
import './i18n'
import App from './components/App'
import { client } from './apolloConfig'

const renderApp = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <GlobalStyle />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  </Suspense>
)

render(renderApp(), document.getElementById('app'))
