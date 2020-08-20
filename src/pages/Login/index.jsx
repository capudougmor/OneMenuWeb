import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Input from '../../components/Input'

import './styles.css'

import logoImg from '../../assets/images/logo.png'


function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  async function handleRegister(e) {  //funcao para o cadastro do usuario disparada quando o form de um submit
    e.preventDefault();  

    const data = {
      name,
      email,
    };

    try {
      // const response = await api.post('ongs', data);// envia os dados e recebe a resposta o envio 'e' sempre que se usar o await usa-se o async antes da funçao
      // o await é para aguardar a resposta
      // alert(`Seu ID de acesso: ${response.data.id}`);

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
            // value={email}
            // onChange={(e) => { setEmail(e.target.value) }}
            />
          <Input
            type='email'
            name='password'
            label='Senha'
            placeholder='Sua senha'
            // required
            // value={avatar}
            // onChange={(e) => { setAvatar(e.target.value) }}
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