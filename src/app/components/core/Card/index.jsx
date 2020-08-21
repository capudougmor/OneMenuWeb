import React from 'react';

import { Container, CardContent } from './styles.js';

import HeaderNav from '../HeaderNav'
import OutsideButton from '../OutsideButton/index.jsx';

export default function Card({ button, children }) {


  return (
    <Container>
      <CardContent>
        {children}
      </CardContent>
    </Container>
  );
} 