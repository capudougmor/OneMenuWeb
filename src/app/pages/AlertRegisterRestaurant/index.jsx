import React from 'react';
import { Link } from 'react-router-dom';

import { PageAlertRegister, Title, SubTitle } from './styles.js';

import LayoutRegisterRestaurant from '../../components/core/LayoutRegisterRestaurant/index.jsx';
import Card from '../../components/core/Card/index.jsx';
import RectButton from '../../components/core/RectButton'

export default function AlertRegisterRestaurant() {

   return (
    <LayoutRegisterRestaurant>
      <PageAlertRegister>
        <Card>
          <Title>Você ainda não cadastrou seu restaurante</Title>
          <SubTitle>Clique no botão abaixo e comece agora a cadastrar seu restaurante.</SubTitle>
          <Link to='RegisterRestaurantName'>
            <RectButton name='Cadastrar restaurante' />
          </Link>
        </Card>
      </PageAlertRegister>
    </LayoutRegisterRestaurant>
  );
}