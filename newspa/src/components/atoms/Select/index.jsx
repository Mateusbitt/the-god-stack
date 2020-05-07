import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ThemeContext } from 'themes'

export const fontSize = ({ height }) => `${height / 50}rem`

const styles = css`  
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text[1]};
  font-size: ${fontSize};
  display: inline-block;
  box-sizing: border-box;
  padding: 0 1em;
  height: 3em;
  background-color: ${({ transparent, theme }) => transparent ? 'transparent' : theme.colors.text[0]};
  border: 2px solid ${({ invalid, theme }) => invalid ? theme.colors.actions[3] : 'transparent'};
  border-radius: 0px;
  margin: 0 2em;
  outline: none;
  transition: border 250ms ease-out;

  &:hover{
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary[3]};
  }
`

export const StyledSelect = styled.select`${styles}`

const Select = ({
  children,
  onChange,
  ...props
}) => {
  const { theme } = useContext(ThemeContext)
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
    if (onChange !== undefined) {
      onChange(event)
    }
  }
  return (
    <StyledSelect
      {...props}
      value={value}
      onChange={handleChange}
      theme={theme}
    >
      {children}
    </StyledSelect>
  )
}

Select.propTypes = {
  children: PropTypes.any,
  height: PropTypes.number,
  invalid: PropTypes.bool,
  transparent: PropTypes.bool,
  onChange: PropTypes.func,
}

Select.defaultProps = {
  height: 50,
}

export default Select
