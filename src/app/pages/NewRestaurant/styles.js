import styled from 'styled-components'
import { FaQrcode } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'
import { FiBookOpen } from 'react-icons/fi'

export const Container = styled.div`
  width: 90vw;
  height: 100vh;
  max-width: 38rem; 
`

export const ImgContainer = styled.div`
  width: 13rem;
  height: 13rem;
  background: var(--text-second);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

export const Title = styled.div`
  margin-top: 2.4rem;
  font-family: 'Roboto';
  font-size: 2.1rem;
  font-weight: 700;
  color: var(--text-primary);
`

export const IconContainer = styled.div`
  width: 70%;
  margin-top: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between ;

  > a {
    width: 6rem;
    height: 6rem;
    background: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
  }
`
export const MenuIcon = styled(FaQrcode)`
  width: 3rem;
  height: 3rem;
  color: #fff
`

export const BookIcon = styled(FiBookOpen)`
  width: 3rem;
  height: 3rem;
  color: #fff
`

export const PenIcon = styled(FiEdit2)`
  width: 3rem;
  height: 3rem;
  color: #fff
`

