import React from 'react';

import { Card, Container, CardContent } from './styles.js';

import HeaderNav from '../HeaderNav'
import OutsideButton from '../OutsideButton/index.jsx';

export default function LayoutRegisterRestaurant({ button, children }) {


  return (
    <Card>
      <HeaderNav />
      <Container>
        <CardContent>
          {children}
        </CardContent>
      </Container>
      {button &&  <OutsideButton name={button} /> }
    </Card>
  );
} 