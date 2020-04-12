import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  box-sizing: border-box;
  min-height: 100vh;
  background-image: ${({ theme }) => `linear-gradient(${theme.colors.background[0]}, ${theme.colors.background[1]}, ${theme.colors.background[2]})`} ;
  color: ${({ theme }) => theme.colors.text[0]};
  font-family: ${({ theme }) => theme.fonts.primary};
`

const Content = styled.section`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`

const GenericTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Content {...props}>{children}</Content>
    </Wrapper>
  )
}

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default GenericTemplate
