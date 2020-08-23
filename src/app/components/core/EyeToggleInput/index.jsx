import React, { forwardRef, useState } from 'react'

import { InputBlock, LargeInput, EyeIcon, EyeIconOff } from './styles.js'

const Input = ({ label, name, placeholder }, ref ) => {

  const [ toggle, setToggle ] = useState(false)

  function toggleVisibly() {
    toggle ? setToggle(false) : setToggle(true)
  }

  return (
    <InputBlock>
      <label>{label}</label>
      <LargeInput 
        type={toggle ? 'text' : 'password'} 
        name={name} ref={ref} 
        placeholder={placeholder} 
      />
      {toggle && 
        <EyeIcon onClick={toggleVisibly} />
        ||  <EyeIconOff onClick={toggleVisibly} />
      }
    </InputBlock>
  )
}

const forwaredInput = forwardRef(Input)

export default forwaredInput