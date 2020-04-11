import React from 'react'
import { Block } from 'components'
import {
  Link,
} from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <Block> HOME </Block>
      <Block>
        <Link to="/login">Login</Link>
      </Block>
    </>
  )
}

export default HomePage
