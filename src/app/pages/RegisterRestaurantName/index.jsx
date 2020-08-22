import React from 'react';
import { useForm } from 'react-hook-form';
import { useProfile } from '../../hooks/Context/Provider'
import { useHistory } from 'react-router-dom';

import { Title, SubTitle, Container } from './styles.js';

import RectButton from '../../components/core/RectButton'
import Input from '../../components/core/Input'
import LayoutRegisterRestaurant from '../../components/core/LayoutRegisterRestaurant'
import Card from '../../components/core/Card/index.jsx';


export default function RegisterRestaurantName() {

  const { name, setName } = useProfile('restaurante')
  const { register, handleSubmit, errors } = useForm()

  const history = useHistory();

  const onSubmit = (data) => {
    setName(data.name)
    console.log(name);
    history.push('/newRestaurant')
  }

  return (
    <LayoutRegisterRestaurant>
      <Container>
        <Card>
          <Title>Cadastro de restaurante</Title>
          <SubTitle>Coloque abaixo o nome do seu estabelecimento.</SubTitle>
          <form onSubmit={handleSubmit(onSubmit)} >
            <Input
              type='text'
              name='name'
              label='Nome do seu restaurante'
              placeholder='Nome do seu restaurante'
              // required
              ref={register}
            />
            <RectButton name='Continuar' type='submit' />
          </form>

        </Card>
      </Container>
    </LayoutRegisterRestaurant>
  );
}
