import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Block } from 'components'

const StyledBlock = styled(Block)`
  padding: 0;
  margin: 10px 0;
`

const HomePage = ({ toggleTheme, t }) => {
  const { i18n } = useTranslation()
  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <Block>{t('pages.HomePage.home')}</Block>
      <StyledBlock>
        <Link to="/login">Login</Link>
      </StyledBlock>
      <StyledBlock>
        <button
          type="button"
          onClick={() => toggleTheme()}
        >
          {t('pages.HomePage.changeTheme')}
        </button>
      </StyledBlock>
      <StyledBlock>
        <button
          type="button"
          onClick={() => changeLang('ptBR')}
        >
          PT
        </button>
      </StyledBlock>
      <StyledBlock>
        <button
          type="button"
          onClick={() => changeLang('enUS')}
        >
          EN
        </button>
      </StyledBlock>
    </>
  )
}

HomePage.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  t: PropTypes.func,
}

export default HomePage
