import React from 'react';

import { LayoutContainer, Container, CardContent } from './styles.js';

import HeaderNav from '../HeaderNav'
import Card from '../Card/index.jsx';
import OutsideButton from '../OutsideButton/index.jsx';

export default function LayoutRegisterRestaurant({ button, children }) {


  return (
    <LayoutContainer>
      <HeaderNav />
        {children}
    </LayoutContainer>
  );
} 