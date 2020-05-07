import React from 'react'
import { Row as GridRow } from 'react-grid-system'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledRow = styled(GridRow)`
  text-align: ${({ textalign }) => textalign || ''};
  justify-content: ${({ justifycontent }) => justifycontent ? `${justifycontent} !important` : 'flex-start'};
`

const Row = ({ children, ...props }) => {
  return (
    <StyledRow {...props}>
      {children}
    </StyledRow>
  )
}

Row.propTypes = {
  children: PropTypes.any,
}

export default Row
