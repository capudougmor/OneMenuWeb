import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ScheduleDay, CheckContent, Hourscontent, IconContainer, SubIcon, SomaIcon } from './styles.js';
import Input from '../Input';
import { useForm } from 'react-hook-form';



export default function ActivitDays({ weekDay }) {

  const [hourOfDays, setHourOfDay] = useState([
    { id: 0, chequed: true, from: '', to: '' }
  ])

  const { register, handleSubmit, errors } = useForm()

  const history = useHistory();

  const onSubmit = (data) => {

    history.push('/')
  }

  function noRegister() {
    history.push('/AlertRegister')
  }

  function addNewHour() {
    setHourOfDay([
      ...hourOfDays,
      { id: (hourOfDays.length + 1), from: '', to: '' }
    ])
  }
  
  function removeHour(hourOfDay) {
    const removedHour = hourOfDays.filter(hourOfDay => {
      return hourOfDays.length !== hourOfDay.id
    })
    setHourOfDay(removedHour)
  }

  return (
    <ScheduleDay >
      <CheckContent >
        <input
          name="open"
          type='checkbox'
          ref={register}
        />
        <span>{weekDay}</span>
      </CheckContent>
      {hourOfDays.map((hourOfDay, index) => {
        return (
            <Hourscontent key={hourOfDay.id} >
              <Input  
                type='time'
                name='from'
                placeholder='Abre'
                // required
                ref={register}
              />
              <Input
                type='time'
                name='to'
                placeholder='Fecha'
                // required
                ref={register}
              />
              <IconContainer>
                <span onClick={removeHour}>
                  <SubIcon />
                </span>

                <span onClick={addNewHour}>
                  <SomaIcon />
                </span>
              </IconContainer>
            </Hourscontent>
        )
      })}
    </ScheduleDay>
  );
} 