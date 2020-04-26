import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Block,
} from 'components'
import { ThemeContext } from 'themes'
import { useTranslation } from 'react-i18next'
import Routes from './Routes'

const Wrapper = styled(Block)`
  min-height: 100vh;
`

function App({ children }) {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <Wrapper theme={theme}>
      {children || (
      <Routes
        theme={theme}
        toggleTheme={toggleTheme}
        t={t}
      />
      )}
    </Wrapper>
  )
}

App.propTypes = {
  children: PropTypes.any,
}

export default App
