import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


import Input from '../../components/Input'
import './styles.css';

import bannerImg from '../../assets/images/banner.png';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confEmail, setConfEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setconfPassword] = useState('');

  const history = useHistory();

  async function handleRegister(e) {  
    e.preventDefault();  
    
    const data = {
      name,
      email,
      confEmail,
      password,
      confPassword,
    };

    try {
          
      

      history.push('/');  
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div id="page-register">
      <header>
        <Link id="home-link" to="/">
          <img src={bannerImg} alt="banner onemenu" />          
        </Link>
      </header>

      <main>
        <section>
          <h1>Crie sua conta</h1>
          <p>Crie sua conta para iniciar o cadastro do seu restaurante.</p>
        </section>

        <form onSubmit={handleRegister}>
          <fieldset>
            <Input
              type='text'
              name='name'
              label='Nome'
              placeholder='Seu nome completo'
              // required
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
            <Input
              type='email'
              name='email'
              label='E-mail'
              placeholder='Seu e-mail'
              // required
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />

            <Input
              type='email'
              name='confEmail'
              label='Confirmação de e-mail'
              placeholder='Seu e-mail'
              // required
              value={confEmail}
              onChange={(e) => { setConfEmail(e.target.value) }}
            />
            <Input
              type='password'
              name='password'
              label='Senha'
              placeholder='Sua senha'
              // required
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />

            <Input
              type='password'
              name='confPassword'
              label='Confirmação de senha'
              placeholder='Sua senha'
              // required
              value={confPassword}
              onChange={(e) => { setconfPassword(e.target.value) }}
            />

            <button type="submit">Continuar</button>
          </fieldset>

        </form>
      </main>
    </div>
  );
}