import React from 'react';
import { Link,  } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'

import './styles.css';

import blueIcon from '../../assets/images/BlueIcon.png';

export default function HeaderNav() {

  
  return (
    <div id="headerNav">
      <div className='container'>
        <div className='btnContent'>
          <Link to="/" className="logo">
            <img src={blueIcon} alt="banner onemenu" />
          </Link>
          <i>
            <FiMenu size={40} color='#fff' />
          </i>
        </div>
      </div>
    </div>
  );
}