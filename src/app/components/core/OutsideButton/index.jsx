import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from './styles.js'

const OutsideButton = ({ name, goPath, ...rest }) => {

  const history = useHistory();
  
  function goToLogin() {
    history.push('/')
  }

  return (
    <Container onClick={goToLogin} type='button' {...rest} >
      {name}
    </Container>
  )
}

export default OutsideButton