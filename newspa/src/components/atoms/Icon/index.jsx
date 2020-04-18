// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const fontSize = ({ width, height }) => {
  const size = width || height
  return size ? `${size / 16}rem` : '1.25em'
}

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  color: 'currentcolor';
  width: 1em;
  margin: 0.1em;
  box-sizing: border-box;
  line-height: normal;
  & > svg {
    width: 100%;
    height: 100%;
  }
`

const Icon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg.default }} />
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

export default Icon
