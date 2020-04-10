import React from 'react'
import PropTypes from 'prop-types'

const Block = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

Block.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Block
