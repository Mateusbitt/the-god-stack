import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import {
  HomePage, LoginPage, NotFoundPage, Block,
} from 'components'

function App() {
  return (
    <Block>
      <h1>Welcome</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Block>
  )
}

export default App
