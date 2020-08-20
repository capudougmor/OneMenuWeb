import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// import api from '../../services/api';
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

  async function handleRegister(e) {  //funcao para o cadastro do usuario disparada quando o form de um submit
    e.preventDefault();  // previne um evento padrao no carregamento da pagina

    const data = {
      name,
      email,
      confEmail,
      password,
      confPassword,
    };

    try {
      // const response = await api.post('ongs', data);// envia os dados e recebe a resposta o envio 'e' sempre que se usar o await usa-se o async antes da funçao
      // o await é para aguardar a resposta
      // alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');  // envia de volta para o logon
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