import React from 'react'
import {
  Routes as Rt,
  Route,
} from 'react-router-dom'
import {
  HomePage,
  LoginPage,
  NotFoundPage,
} from 'components'

const Routes = ({ ...props }) => {
  return (
    <Rt>
      <Route path="/" element={<HomePage {...props} />} />
      <Route path="/login" element={<LoginPage {...props} />} />
      <Route path="*" element={<NotFoundPage {...props} />} />
    </Rt>
  )
}

export default Routes
