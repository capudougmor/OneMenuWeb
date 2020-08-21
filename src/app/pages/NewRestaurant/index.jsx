import React from 'react';
import { useHistory } from 'react-router-dom';

import { Title, SubTitle } from './styles.js';


import RectButton from '../../components/core/RectButton'
import Input from '../../components/core/Input'
import LayoutRegisterRestaurant from '../../components/core/LayoutRegisterRestaurant'

export default function RegisterRestaurantName() {

  const history = useHistory();

  async function handleRegister(e) {  
    
  }

  return (
    <LayoutRegisterRestaurant button='Cadastrar novo restaurante'>
      <Title>Nome do restaurante</Title>
      

    </LayoutRegisterRestaurant>
  );
}
  