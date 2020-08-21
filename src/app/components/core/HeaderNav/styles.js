import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'

export const CompHeader = styled.div`
  width: 100vw;
`

export const Container = styled.div`
  background: var(--secundary);
`

export const BtnContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > a {
    width: 11rem;
    height: 10rem;
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
  }  
  `
export const LogoImage = styled.img`
  width: 8rem;
  object-fit: cover;
`
export const MenuIcon = styled(FiMenu)`
  width: 6rem;
  height: 6rem;
  padding-right: 2rem;
  color: #fff
`