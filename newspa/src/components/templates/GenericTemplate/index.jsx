import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Header } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100vh;
  background-image: ${({ theme }) => `linear-gradient(${theme.colors.background[0]}, ${theme.colors.background[1]}, ${theme.colors.background[2]})`} ;
  color: ${({ theme }) => theme.colors.text[0]};
  font-family: ${({ theme }) => theme.fonts.primary};
`

const Content = styled.section`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 3rem 0;
  width: 100%;
  box-sizing: border-box;
`

const GenericTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header {...props} />
      <Content {...props}>{children}</Content>
    </Wrapper>
  )
}

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default GenericTemplate
