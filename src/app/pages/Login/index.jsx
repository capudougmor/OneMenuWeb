import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { PageLogin, LogoContainer, Form, Fieldset, BottonLink, LogoImg, Title, ForgetLink } from './styles.js'
import Input from '../../components/core/Input'
import RectButton from '../../components/core/RectButton'
import EyeToggleInput from '../../components/core/EyeToggleInput'

import logoImg from '../../../assets/images/logo.png'

export default function Login() {

  const { register, handleSubmit, errors } = useForm()

  const history = useHistory();

  const onSubmit = (data) => {

    history.push('/AlertRegisterRestaurant')
  }

  return (
    <PageLogin>
      <LogoContainer>
        <LogoImg src={logoImg} alt="OneMenu" />
        <Title>
          O app que conecta você ao seu cliente de maneira fácil e segura
        </Title>
      </LogoContainer>

      <Form onSubmit={handleSubmit(onSubmit)} >
        <Fieldset>
          <Input
            type='email'
            name='email'
            label='E-mail'
            placeholder='Seu e-mail'
            required
            ref={register}
          />
          <EyeToggleInput
            type='password'
            name='password'
            label='Senha'
            placeholder='Sua senha'
            required
            ref={register}
          />

        </Fieldset>

        <Link to="Register" >
          <ForgetLink>
            Esqueci meu e-mail ou senha
          </ForgetLink>
        </Link>

        <RectButton name='Entrar' />

      </Form>

      <Link to="Register" >
        <BottonLink>
          Cadastre seu restaurante agora.
        </BottonLink>
      </Link>

    </PageLogin>
  )
}
