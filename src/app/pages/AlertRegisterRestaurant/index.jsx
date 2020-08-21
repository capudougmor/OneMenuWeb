import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import { PageAlertRegister, Container, Card, Title, SubTitle } from './styles.js';

import HeaderNav from '../../components/core/HeaderNav'
import RectButton from '../../components/core/RectButton'

export default function AlertRegisterRestaurant() {

  const history = useHistory();

  function handleRegister(e) {  
    
  }

  return (
    <PageAlertRegister>
      <HeaderNav />
      <Container>
        <Card>
          <Title>Você ainda não cadastrou seu restaurante</Title>
          <SubTitle>Clique no botão abaixo e comece agora a cadastro do seu restaurante.</SubTitle>
          <Link to='RegisterRestaurantName'>
            <RectButton name='Cadastrar restaurante' goPath='RegisterRestaurantName' />
          </Link>
        </Card>
      </Container>
    </PageAlertRegister>
  );
}