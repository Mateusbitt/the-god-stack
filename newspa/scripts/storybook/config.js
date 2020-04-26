import React, { Suspense } from 'react'
// import { ApolloProvider } from 'react-apollo'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { setConsoleOptions } from '@storybook/addon-console'
import { BrowserRouter as Router } from 'react-router-dom'
// import App from '../../src/components/App'
// import ThemeProvider from '../../src/themes/ThemeProvider'
// import GlobalStyle from '../../src/themes/GlobalStyle'
// import { client } from '../../src/apolloConfig'


setConsoleOptions({
  panelExclude: [],
})
const req = require.context('components', true, /.stories.js$/)
// const req2 = require.context('themes', true, /.js$/)

const loadStories = () => {
  const x = req.keys().forEach((filename) => {
    console.log({ r: filename })
    return req(filename)
  })
  // const y = req2.keys().forEach((filename) => {
  //   console.log({ r2: filename })
  //   return req2(filename)
  // })
  console.log({ x })
}

// addDecorator(
//   withInfo({
//     header: false, // Global configuration for the info addon across all of your stories.
//   }),
// )

addDecorator((story) => (
  <Suspense fallback={<h1>Loading...</h1>}>
    {/* <ApolloProvider client={client}> */}
    {/* <ThemeProvider>
        <GlobalStyle />
        <Router>
          <App> */}
    {story()}
    {/* </App>
        </Router>
      </ThemeProvider> */}
    {/* </ApolloProvider> */}
  </Suspense>
))

configure(
  loadStories,
  module,
)
