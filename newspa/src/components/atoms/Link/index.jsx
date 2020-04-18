import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ThemeContext } from 'themes'
import { NavLink } from 'react-router-dom'

const styles = css`
  font-family: ${({ theme }) => theme.fonts.primary};
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text[1]};
  transition: color 250ms ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.text[0]};
  }
`

export const StyledNavLink = styled(({
  theme, reverse, ...props
}) => <NavLink {...props} />)`${styles}`

export const Anchor = styled.a`${styles}`

const Link = ({ ...props }) => {
  const { theme } = useContext(ThemeContext)
  const { to } = props
  if (to) {
    return <StyledNavLink {...props} theme={theme} />
  }
  return <Anchor {...props} theme={theme} />
}

Link.propTypes = {
  reverse: PropTypes.bool,
  to: PropTypes.string,
}

export default Link
