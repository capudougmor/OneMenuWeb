import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


import Input from '../../components/core/Input'

import { PageRegister, 
  Container, 
  Header, 
  Content, 
  Title,
  SubTitle,
  BannerImg, 
  Fieldset, 
} from './styles.js';

import bannerImg from '../../../assets/images/banner.png';
import RectButton from '../../components/core/RectButton';
import { useForm } from 'react-hook-form';

export default function Register() {
  
  const { register, handleSubmit, errors } = useForm()

  const history = useHistory();

  const onSubmit = (data) => {

    history.push('/')
  }

  function noRegister() {
    history.push('/AlertRegister')
  }

  return (
    <PageRegister>
      <Header>
        <Link id="home-link" to="/">
          <BannerImg src={bannerImg} alt="banner onemenu" />
        </Link>
      </Header>

      <Container>
        <Content>
          <Title>Crie sua conta</Title>
          <SubTitle>Cria seu conta para iniciar o cadastro do seu restaurante.</SubTitle>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Fieldset>
              <Input
                type='text'
                name='name'
                label='Nome'
                placeholder='Seu nome completo'
                // required
                ref={register}                
              />
              <Input
                type='email'
                name='email'
                label='E-mail'
                placeholder='Seu e-mail'
                // required
                ref={register}
              />

              <Input
                type='email'
                name='confEmail'
                label='Confirmação de e-mail'
                placeholder='Seu e-mail'
                // required
                ref={register}                
              />
              <Input
                type='password'
                name='password'
                label='Senha'
                placeholder='Sua senha'
                // required
                ref={register}

              />

              <Input
                type='password'
                name='confPassword'
                label='Confirmação de senha'
                placeholder='Sua senha'
                // required
                ref={register}

              />

              <RectButton name='Continuar' />

            </Fieldset>

          </form>
        </Content>
      </Container>
    </PageRegister>
  );
}