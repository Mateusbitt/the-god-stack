import React from 'react'
import { Block } from 'components'
import {
  Link,
} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
      <Block> Not Found </Block>
      <Block>
        <Link to="/">Home</Link>
      </Block>
    </>
  )
}

export default NotFoundPage
