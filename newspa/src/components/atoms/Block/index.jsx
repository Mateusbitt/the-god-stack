import PropTypes from 'prop-types'
import styled from 'styled-components'

export const fontSize = ({ height }) => `${height / 50}rem`

const Block = styled.div`
  position: relative;
  font-size: ${fontSize};
`

Block.propTypes = {
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

Block.defaultProps = {
  height: 50,
}

export default Block
