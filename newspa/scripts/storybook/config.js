import React, { Suspense } from 'react'
import { ApolloProvider } from 'react-apollo'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { setConsoleOptions } from '@storybook/addon-console'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, GlobalStyle } from 'themes'
import App from '../../src/components/App'
import { client } from '../../src/apolloConfig'

const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

setConsoleOptions({
  panelExclude: [],
})

addDecorator(
  withInfo({
    header: false, // Global configuration for the info addon across all of your stories.
  }),
)

addDecorator((story) => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <GlobalStyle />
        <Router>
          <App>
            {story()}
          </App>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  </Suspense>
))

configure(
  loadStories,
  module,
)
