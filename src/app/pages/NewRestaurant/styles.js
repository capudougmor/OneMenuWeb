import styled from 'styled-components'
import { FaQrcode } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'
import { FiBookOpen } from 'react-icons/fi'

export const Title = styled.div`
  margin-top: 2.4rem;
  font-family: 'Roboto';
  font-size: 2.1rem;
  font-weight: 700;
  color: var(--text-primary);
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

export const LogoImg = styled.img`
  
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
export const Button = styled.button`
  width: 100%;
  height: 5rem;
  background: var(--primary);
  color: var(--button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.8rem Roboto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  margin: 2rem 0;
  transition: 0.2s;

  &:hover {
    background: var(--secundary-dark);
  }
`
