import React, { useContext } from 'react'
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

function App() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <Wrapper theme={theme}>
      <Routes
        theme={theme}
        toggleTheme={toggleTheme}
        t={t}
      />
    </Wrapper>
  )
}

export default App
