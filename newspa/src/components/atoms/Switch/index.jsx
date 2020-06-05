import React, { useContext }from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ThemeContext } from 'themes'

const SwitchStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 8px;
  margin-right: 15px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ invalidrule }) => invalidrule ? '#f2f2f2' : '#ccc'};
    -webkit-transition: .4s;
    transition: .4s;
  }

  span:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: -5px;
    bottom: -5px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + span {
    background-color: ${({ invalidrule, theme }) => invalidrule ? '#f2f2f2' : theme.colors.primary[2]};
  }

  input:focus + span {
    box-shadow: ${({ theme }) => `0 0 1px ${theme.colors.primary[2]}`};
  }

  input:checked + span:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  span.round {
    border-radius: 34px;
  }

  span.round:before {
    border-radius: 50%;
  }
`
const StyledInput = styled.input``

const Switch = (props) => {
  const { theme } = useContext(ThemeContext)
  const { value = false, invalidrule } = props
  return (
    <SwitchStyled invalidrule={invalidrule} theme={theme}>
      <StyledInput type="checkbox" {...props} disabled={invalidrule} checked={value} />
      <span className="round" />
    </SwitchStyled>
  )
}

Switch.propTypes = {
  value: PropTypes.bool,
  invalidrule: PropTypes.bool,
}

export default Switch
