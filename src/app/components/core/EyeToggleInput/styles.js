import styled from 'styled-components'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export const InputBlock = styled.div`
  position: relative;
  margin-top: 2rem;
  
  > label {
    font: 500 1.9rem Roboto;
  }
`
export const LargeInput = styled.input`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.7rem;
  border-radius: 0.8rem;
  background: var(--background);
  border: 1px solid var(--line-in-white);
  outline: 0;
  padding: 0 1.6rem;
  font: 400 1.8rem Roboto;
`
export const EyeIcon = styled(FiEye)`
  width: 2.2rem;
  height: 2.2rem;
  color: var(--line-in-white);
  position: absolute;
  top: 48px;
  right: 15px;
  cursor: pointer;
`

export const EyeIconOff = styled(FiEyeOff)`
  width: 2.2rem;
  height: 2.2rem;
  color: var(--line-in-white);
  position: absolute;
  top: 48px;
  right: 15px;
  cursor: pointer;
`
