import React from 'react'
import { Block } from 'components'
import {
  Link,
} from 'react-router-dom'

const LoginPage = () => {
  return (
    <>
      <Block> Login </Block>
      <Block>
        <Link to="/">Home</Link>
      </Block>
    </>
  )
}

export default LoginPage
