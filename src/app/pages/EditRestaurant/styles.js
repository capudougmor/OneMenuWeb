import styled from 'styled-components'
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

export const Container = styled.div`
  
`

export const Title = styled.h2`
  width: 100%;
  font-family: 'Roboto';
  font-size: 3rem;
  font-weight: 700;
  text-align: left;
  color: var(--text-primary);
`

export const SubTitle = styled.div`
  width: 100%;
  text-align: left;
  font: 700 2.1rem Roboto;
  color: var(--text-primary);
`

export const Fieldset = styled.div`
  width: 100%;
  border: 0;
  margin-top: 4rem;
  margin-bottom: 1.6rem;
`


export const ScheduleDay = styled.div`
  width: 100%;
  max-width: 38rem;
  display: grid;
  grid-template-columns: 20px 1fr 1fr 1fr;
  gap: 1.2rem;
  align-items: end;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--line-in-white);
`
export const CheckContent = styled.div`
  width: 3rem;
  height: 8rem;
  display: flex;

  > input {
    width: 2.3rem;
    height: 2.3rem;
    cursor: pointer;
  }  
`
export const IconContainer = styled.div`

  > a {
    width: 2.3rem;
    height: 2.3rem;
    background: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    margin-top: 8px;
  }
`
export const SubIcon = styled(FaMinus)`
  width: 1.3rem;
  height: 1.3rem;
  color: #fff
`

export const SomaIcon = styled(FaPlus)`
  width: 1.3rem;
  height: 1.3rem;
  color: #fff
`

