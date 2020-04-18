import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { ThemeContext } from 'themes'

export const fontSize = ({ height }) => `${height / 50}rem`

const styles = css`
  display: inline-flex;  
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text[0]};
  background-color: ${({ theme }) => theme.colors.primary[0]};
  align-items: center;
  white-space: nowrap;
  font-size: ${fontSize};
  border: 2px solid ${({ transparent, theme }) => transparent ? 'transparent' : theme.colors.primary[3]};
  border-radius: 8px;
  box-sizing: border-box;
  height: 3em;
  justify-content: center;
  text-decoration: none;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  appearance: none;
  padding: 0 1em;
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  width: 200px;
  margin-top: 5px;
  margin-bottom: 20px;
  font-weight: 600;

  &:hover, &:active {
    background-color: ${({ disabled, transparent, theme }) => !disabled && !transparent && theme.colors.primary[3]};
  }

  &:focus {
    outline: none
  }

  @media only screen and (max-width: 640px){
    width: 100%;
    height: 45px;
    margin-top: 0;
    font-size: 14px;
    font-weight: normal;
  }
`

export const StyledLink = styled(({
  disabled, transparent, reverse, height, theme, ...props
}) => <Link {...props} />)`${styles}`

export const Anchor = styled.a`${styles}`
export const StyledButton = styled.button`${styles}`

const Button = ({ type, ...props }) => {
  const { theme } = useContext(ThemeContext)
  const { to, href } = props
  if (to) {
    return <StyledLink {...props} theme={theme} />
  } if (href) {
    return <Anchor {...props} theme={theme} />
  }
  return <StyledButton {...props} theme={theme} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
  height: 50,
}

export default Button
