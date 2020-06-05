import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { usePersistedState } from 'hooks'
import {
  GenericTemplate, Block, Button, Link, Input,
} from 'components'

const StyledBlock = styled(Block)`
  padding: 0;
  margin: 10px 0;
`

const HomePage = ({ toggleTheme, t, ...props }) => {
  return (
    <GenericTemplate {...props} t={t} toggleTheme={toggleTheme}>
      <Block>{t('pages.HomePage.home')}</Block>
      <StyledBlock>
        <Link to="/login">Login</Link>
      </StyledBlock>
      <StyledBlock>
        <Input type="password" />
      </StyledBlock>
    </GenericTemplate>
  )
}

HomePage.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  t: PropTypes.func,
}

export default HomePage
