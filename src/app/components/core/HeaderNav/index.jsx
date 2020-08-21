import React from 'react';
import { Link,  } from 'react-router-dom';

import { CompHeader, Container, BtnContent, MenuIcon, LogoImage } from './styles';

import blueIcon from '../../../../assets/images/BlueIcon.png';

export default function HeaderNav() {
  
  return (
    <CompHeader>
      <Container>
        <BtnContent>
          <Link to="/">
            <LogoImage src={blueIcon} alt="logo" />
          </Link>
          <MenuIcon />
        </BtnContent>
      </Container>
    </CompHeader>
  );
}