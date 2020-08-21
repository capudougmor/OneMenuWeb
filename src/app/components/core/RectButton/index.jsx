import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from './styles.js'

const RectButton = ({ name, ...rest }) => {
  

  return (
    <Container {...rest} >
      {name}
    </Container>
  )
}

export default RectButton