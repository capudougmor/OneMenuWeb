import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Title, ImgContainer, LogoImg, IconContainer, MenuIcon, BookIcon, PenIcon  } from './styles.js';


import LayoutRegisterRestaurant from '../../components/core/LayoutRegisterRestaurant'

export default function RegisterRestaurantName() {  

  const history = useHistory();
  
  function goTo() {
    history.push('/')
  }

  return (
    <LayoutRegisterRestaurant button='Cadastrar novo restaurante' type='button' >
      <ImgContainer>
        <LogoImg  />
      </ImgContainer>

      <Title>Nome do restaurante</Title>

      <IconContainer>
        <Link to="/">
          <MenuIcon />            
        </Link>

        <Link to="/">
          <BookIcon />            
        </Link>

        <Link to="/">
          <PenIcon />            
        </Link>
      </IconContainer>    

    </LayoutRegisterRestaurant>
  );
}
  