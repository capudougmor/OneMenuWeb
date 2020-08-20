import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Input from '../../components/Input'

import './styles.css'

import logoImg from '../../assets/images/logo.png'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleRegister(e) { 
    e.preventDefault();  

    const data = {
      email,
      password,
    };

    try {
      

      history.push('/'); 
    } catch (err) {
    }
  }

  function noRegister() {  
    history.push('/AlertRegister')
  }

  return (
    <div id="page-Login">
      <div className="logo-container">
        <img src={logoImg} alt="OneMenu"/>
        <h3>O app que conecta você ao seu cliente de maneira fácil e segura</h3>
      </div>

      <form onSubmit={noRegister} >
        <fieldset>
          <Input
            type='email'
            name='email'
            label='E-mail'
            placeholder='Seu e-mail'
            // required
            // value={name}
            // onChange={(e) => { setName(e.target.value) }}
            />
          <Input
            type='email'
            name='password'
            label='Senha'
            placeholder='Sua senha'
            // required
            // value={avatar}
            // onChange={(e) => { setPassword(e.target.value) }}
          />

        </fieldset>
                          
        <Link to="give-classes" className="linkPassword">
          Esqueci meu e-mail ou senha
        </Link>

        <button type="submit">Entrar</button>

      </form>
        
      <div>
        <Link to="Register" className="linkRegister">
          Cadastre seu restaurante agora.
        </Link>
      </div>
        
    </div>
  )
}

export default Login