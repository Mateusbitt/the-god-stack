import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import MaskedInput from 'react-text-mask'
import { Icon } from 'components'
import { ThemeContext } from 'themes'

export const fontSize = ({ height }) => `${height / 50}rem`
export const fontFamily = ({ theme }) => theme.fonts.primary
export const color = ({ theme }) => theme.colors.text[1]
export const IconColor = ({ theme }) => theme.colors.primary[3]
export const padding = ({ type }) => type === 'textarea' ? '0.4em' : '0 1em'
export const height = ({ type }) => type === 'textarea' ? 'auto' : '3em'
export const backgroundColor = ({ theme }) => theme.colors.text[0]
export const border = ({ invalid, theme }) => invalid ? theme.colors.actions[3] : 'transparent'
export const borderColor = ({ theme }) => theme.colors.primary[3]

const styles = css`
  font-family: ${fontFamily};
  color: ${color};
  display: inline-block;
  width: 100%;
  padding: 0 1em;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: ${padding};
  height: ${height};
  background-color: ${backgroundColor};
  border: 2px solid ${border};
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
  transition: border-color 250ms ease-out;

  &:focus{
    border-color: ${borderColor};
  }

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: 100%;
    height: 24px;
    margin: 0 0.2rem 0 0;
    position: initial;
  }
`

const StyledIcon = styled(Icon)`
  display: block;
  padding-bottom: 0px;
  height: auto;
  margin: 0px;
  color: ${IconColor};
`

const StyledButton = styled.button`
  margin: 0px;
  padding: 0px;
  border: 0px;
  background: transparent;
  position: absolute;
  z-index: 10;
  right: 20px;
  top: 30%;
  outline:none;
`

export const StyledTextarea = styled.textarea`${styles}`
export const StyledSelect = styled.select`${styles}`
export const StyledInput = styled.input`${styles}`

const Input = ({
  mask, type, onChange, ...props
}) => {
  const { theme } = useContext(ThemeContext)
  const [eye, setEye] = useState(false)
  const [value, setValue] = useState('')
  const toogleEye = () => setEye(!eye)
  const handleChange = (event) => {
    setValue(event.target.value)
    if (onChange !== undefined) {
      onChange(event)
    }
  }
  if (type === 'textarea') {
    return <StyledTextarea onChange={handleChange} {...props} theme={theme} />
  }
  if (type === 'select') {
    return <StyledSelect onChange={handleChange} {...props} theme={theme} />
  }
  if (mask !== undefined) {
    const propsGeral = props
    return (
      <MaskedInput
        mask={mask}
        onChange={handleChange}
        render={(ref, props) => (
          <StyledInput ref={ref} value={value} {...propsGeral} {...props} theme={theme} />
        )}
      />
    )
  }
  if (type === 'password') {
    const eyeIcon = eye ? <StyledIcon icon="eye" invalid={props.invalid} theme={theme} /> : <StyledIcon icon="eye-not" invalid={props.invalid} theme={theme} />
    const typePassword = eye ? 'text' : 'password'
    return (
      <>
        <StyledInput value={value} onChange={handleChange} {...Object.assign(props, { type: typePassword })} theme={theme} />
        <StyledButton
          onClick={(e) => {
            e.preventDefault()
            e.nativeEvent.screenX !== 0 && e.nativeEvent.screenY !== 0 ? toogleEye() : false
          }}
        >
          { eyeIcon }
        </StyledButton>
      </>
    )
  }
  return <StyledInput type={type} value={value} onChange={handleChange} {...props} theme={theme} />
}

Input.propTypes = {
  type: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  invalid: PropTypes.bool,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.string,
  mask: PropTypes.arrayOf(PropTypes.any),
  value: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  height: 50,
  placeholder: ' ',
}

export default Input
