import React from 'react'
import { Col as GridCol } from 'react-grid-system'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCol = styled(GridCol)`
  text-align:  ${({ textalign }) => textalign || 'initial'};
`

const Col = ({ children, ...props }) => {
  return (
    <StyledCol {...props}>{children}</StyledCol>
  )
}

Col.propTypes = {
  children: PropTypes.any,
}

export default Col
