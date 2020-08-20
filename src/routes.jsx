import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import AlertRegister from './pages/AlertRegister'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/Register" exact component={Register} />
      <Route path="/AlertRegister" exact component={AlertRegister} />
      
    </BrowserRouter>
  )
}

export default Routes