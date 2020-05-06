import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeContext } from 'themes'

export const fontSize = ({ height }) => `${height / 50}rem`

export const StyledOption = styled.option`  
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text[1]};
  font-size: ${fontSize};
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  padding: 0 1em;
  height: 3em;
  background-color: ${({ theme }) => theme.colors.primary[0]};
  margin-top: 5px;
  margin-bottom: 20px;
  outline: 0;
  border: 0;
  transition: border-color 250ms ease-out;

  &:hover{
    box-shadow: 0 0 10px 100px red inset;
    background-color: ${({ theme }) => theme.colors.primary[0]};
  }
`

const Option = ({
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
    <StyledOption
      {...props}
      onChange={handleChange}
      theme={theme}
    >
      {children}
    </StyledOption>
  )
}

Option.propTypes = {
  children: PropTypes.any,
  height: PropTypes.number,
  invalid: PropTypes.bool,
  transparent: PropTypes.bool,
  onChange: PropTypes.func,
}

Option.defaultProps = {
  height: 50,
}

export default Option
