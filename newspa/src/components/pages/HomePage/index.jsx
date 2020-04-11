import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Block } from 'components'

const HomePage = ({ toggleTheme }) => {
  return (
    <>
      <Block> HOME </Block>
      <Block>
        <Link to="/login">Login</Link>
      </Block>
      <Block>
        <button
          type="button"
          onClick={() => toggleTheme()}
        >
          Change theme
        </button>
      </Block>
    </>
  )
}

HomePage.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
}

export default HomePage
