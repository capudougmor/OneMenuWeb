import React from 'react'

import { InputBlock, LargeInput } from './styles.js'

const Input = ({ label, name, ...rest }) => {
  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <LargeInput type="text" id={name} {...rest} />
    </InputBlock>
  )
}

export default Input 