import React from 'react';
import {  } from 'react-router-dom';

import { Card, Container, CardContent } from './styles.js';

import HeaderNav from '../HeaderNav'
import RectButton from '../RectButton'

export default function LayoutRegisterRestaurant({ button, children }) {

  return (
    <Card>
      <HeaderNav />
      <Container>
        <CardContent>
          {children}
        </CardContent>
      </Container>
      {button &&  <RectButton name={button} /> }
    </Card>
  );
}