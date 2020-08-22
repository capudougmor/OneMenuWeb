import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useProfile } from '../../hooks/Context/Provider'

import { Container, Title, ImgContainer, LogoImg, IconContainer, MenuIcon, BookIcon, PenIcon } from './styles.js';


import LayoutRegisterRestaurant from '../../components/core/LayoutRegisterRestaurant'
import Card from '../../components/core/Card/index.jsx';
import RectButton from '../../components/core/RectButton';

export default function NewRestauant() {

  const { name, setName } = useProfile()


  const history = useHistory();

  // function goTo() {
  //   history.push('/')
  // }

  return (
    <LayoutRegisterRestaurant >
      <Container>
        <Card >
          <ImgContainer>
            {/* <LogoImg  /> */}
          </ImgContainer>

          {!name && <Title>Nome do restaurante</Title>}
          <Title>{ name }</Title>

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
        </Card>

        <RectButton name='Castrar novo restaurante' />
      </Container>
    </LayoutRegisterRestaurant>
  );
}
