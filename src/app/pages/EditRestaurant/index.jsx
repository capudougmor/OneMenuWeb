import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
  Container,
  Title,
  Fieldset,
  SubTitle,
  ScheduleDay,
  CheckContent,
  IconContainer,
  SomaIcon,
  SubIcon
} from './styles.js';

import LayoutRegisterRestaurant from '../../components/core/LayoutRegisterRestaurant'
import Card from '../../components/core/Card/index.jsx';
import Input from '../../components/core/Input/index.jsx';
import RectButton from '../../components/core/RectButton';
import ActivitDays from '../../components/core/ActiditDays/index.jsx';

export default function EditRestaurant() {

  const { register, handleSubmit, errors } = useForm()

  const history = useHistory();

  const onSubmit = (data) => {

    history.push('/')
  }

  function noRegister() {
    history.push('/AlertRegister')
  }
 
  return (
    <LayoutRegisterRestaurant >
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card >
            <Title>Crie sua conta</Title>

            <Fieldset>
              <Input
                type='text'
                name='name'
                label='Logo'
                placeholder='Selecione seu logo'
                // required
                ref={register}
              />
              <Input
                type='text'
                name='name'
                label='Nome do restaurante'
                placeholder='Nome do restaurante'
                // required
                ref={register}
              />
              <Input
                type='textarea'
                name='description'
                label='Descrição'
                placeholder='Conte um pouco sobre seu estabelecimento'
                // required
                ref={register}
              />
              <Input
                type='email'
                name='kitchen'
                label='Tipo de cozinha'
                placeholder='Seu e-Selecione'
                // required
                ref={register}
              />
              <Input
                type='text'
                name='Ambiente 1'
                label='Ambiente 1'
                placeholder='Sua senha'
                // required
                ref={register}

              />
              <Input
                type='text'
                name='Ambiente 2'
                label='Ambiente 2'
                placeholder='Selecione seu arquivo'
                // required
                ref={register}

              />
            </Fieldset>
          </Card>

          <Card >
            <SubTitle>Endereço</SubTitle>
            <Fieldset>
              <Input
                type='text'
                name='address'
                label='Endereço'
                placeholder='Digite seu endereço'
                // required
                ref={register}
              />
            </Fieldset>
          </Card>

          <Card >
            <SubTitle>Horário de funcionamento</SubTitle>

            <ActivitDays weekDay='Segunda' />
            <ActivitDays weekDay='Terça' />
            <ActivitDays weekDay='Quarta' />
            <ActivitDays weekDay='Quinta' />
            <ActivitDays weekDay='Sexta' />
            <ActivitDays weekDay='Sábado' />
            <ActivitDays weekDay='Domingo' />
          </Card>

          <RectButton name='Continuar' />
        </form>
      </Container>
    </LayoutRegisterRestaurant>
  );
}
