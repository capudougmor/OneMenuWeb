import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import AlertRegisterRestaurant from './pages/AlertRegisterRestaurant'
import RegisterRestaurantName from './pages/RegisterRestaurantName'
import NewRestaurant from './pages/NewRestaurant'
import EditRestaurant from './pages/EditRestaurant'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/AlertRegisterRestaurant" component={AlertRegisterRestaurant} />
      <Route path="/RegisterRestaurantName" component={RegisterRestaurantName} />
      <Route path="/NewRestaurant" component={NewRestaurant} />
      <Route path="/EditRestaurant" component={EditRestaurant} />
      
    </BrowserRouter>
  )
}

export default Routes