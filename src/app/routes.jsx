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
      <Route path="/register" component={Register} />
      <Route path="/alertRegisterRestaurant" component={AlertRegisterRestaurant} />
      <Route path="/registerRestaurantName" component={RegisterRestaurantName} />
      <Route path="/newRestaurant" component={NewRestaurant} />
      <Route path="/editRestaurant" component={EditRestaurant} />
      
    </BrowserRouter>
  )
}

export default Routes