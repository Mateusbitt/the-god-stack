import PropTypes from 'prop-types'
import styled from 'styled-components'

const Block = styled.div`
  position: relative;
`

Block.propTypes = {
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

export default Block
