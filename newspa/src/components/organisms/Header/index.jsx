import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import {
  Row, Col, Block, Button, Select, Option, Link, Img,
} from 'components'
import { usePersistedState } from 'hooks'
import PropTypes from 'prop-types'
import logo from '../../../../public/img/tgs.png'

const StyledHeader = styled.header`
  max-width: ${({ theme }) => theme.sizes.headerWidth};
  width: 100%;
  margin: 0 auto;
  z-index: 100;
  padding: 30px 90px;
`
const StyledImg = styled(Img)`
  height: 3em;
  margin-right: 15px;
  float: left;
`
const StyledSpan = styled.span`
  font-weight: 600;
`

const Header = ({ t, theme }) => {
  const { i18n } = useTranslation()
  const [lang, setLang] = usePersistedState('language', JSON.parse(localStorage.getItem('language')) || 'enUS')

  const changeSelect = (e) => {
    i18n.changeLanguage(e.target.value)
    setLang(e.target.value)
  }

  return (
    <StyledHeader theme={theme}>
      <Row>
        <Col marginauto="true" textalign="left" sm={2}>
          <StyledImg src={logo} alt="logo" />
          <Block height={43}>
            The
            <br />
            <StyledSpan>God</StyledSpan>
            <br />
            Stack
          </Block>
        </Col>
        <Col textalign="center" marginauto="true" sm={5}>
          <Row>
            <Col sm={3}>
              <Link to="/">{t('organisms.Header.menu.about')}</Link>
            </Col>
            <Col sm={5}>
              <Link to="/">{t('organisms.Header.menu.developers')}</Link>
            </Col>
            <Col sm={4}>
              <Link to="/">{t('organisms.Header.menu.links')}</Link>
            </Col>
          </Row>
        </Col>
        <Col textalign="right" sm={5}>
          <Select transparent onChange={changeSelect}>
            <Option value="enUS">English</Option>
            <Option value="ptBR">Português</Option>
          </Select>
          <Button
            type="button"
            onClick={() => console.log('Redirect to login page')}
          >
            {t('organisms.Header.login')}
          </Button>
        </Col>
      </Row>
    </StyledHeader>
  )
}

Header.propTypes = {
  t: PropTypes.func,
  theme: PropTypes.object,
}

export default Header
