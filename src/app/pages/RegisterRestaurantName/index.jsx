import React from 'react';
import { useHistory } from 'react-router-dom';

import { Title, SubTitle } from './styles.js';


import RectButton from '../../components/core/RectButton'
import Input from '../../components/core/Input'
import LayoutRegisterRestaurant from '../../components/core/LayoutRegisterRestaurant'

export default function RegisterRestaurantName() {

  const history = useHistory();

  function goNewRestaurante() {  
    history.push('/')
  }

  return (
    <LayoutRegisterRestaurant>
      <Title>Cadastro de restaurante</Title>
      <SubTitle>Coloque abaixo o nome do seu estabelecimento.</SubTitle>
      <Input
          type='text'
          name='name'
          label='Nome do seu restaurante'
          placeholder='Nome do seu restaurante'
          // required
          // ref={register}                
        />

      <RectButton name='Continuar' onClick={goNewRestaurante} type='button' />

    </LayoutRegisterRestaurant>
  );
}
  