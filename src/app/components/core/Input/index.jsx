import React, { forwardRef } from 'react'

import { InputBlock, LargeInput } from './styles.js'

const Input = ({ label, name, type, placeholder }, ref ) => {
  return (
    <InputBlock>
      <label>{label}</label>
      <LargeInput type={type} name={name} ref={ref} placeholder={placeholder} />
    </InputBlock>
  )
}

const forwaredInput = forwardRef(Input)

export default forwaredInput