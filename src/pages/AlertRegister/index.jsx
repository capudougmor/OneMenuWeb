import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// import api from '../../services/api';
import './styles.css';

import bannerImg from '../../assets/images/banner.png';
import HeaderNav from '../../components/HeaderNav'

export default function AlertRegister() {

  const history = useHistory();

  async function handleRegister(e) {  
    
  }

  return (
    <div id="page-AlertRegister">
      <HeaderNav />
      <main>
        <h3>Você ainda não cadastrou seu restaurante</h3>
        <p>Clique no botão abaixo e comece agora a cadastro do seu restaurante.</p>
        <button>Cadastrar restaurante</button>
      </main>
    </div>
  );
}