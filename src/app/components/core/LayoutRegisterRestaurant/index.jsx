import React from 'react';

import { LayoutContainer } from './styles.js';

import HeaderNav from '../HeaderNav'

export default function LayoutRegisterRestaurant({ button, children }) {


  return (
    <LayoutContainer>
      <HeaderNav />
        {children}
    </LayoutContainer>
  );
} 