import styled from 'styled-components'
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

export const ScheduleDay = styled.div`
  width: 100%;
  max-width: 38rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--line-in-white);
`
export const CheckContent = styled.label`
  width: 3rem;
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;  
  
  input {
    width: 2.3rem;
    height: 2.3rem;
    cursor: pointer;
  }  
  
  span {
    font: 500 1.9rem Roboto;
  }
`

export const Hourscontent = styled.div`
  width: 100%;
  max-width: 38rem;
  display: grid;
  grid-template-columns:  120px 120px 50px;
  gap: 1.2rem;
  align-items: end;
  justify-content: end;
`

export const IconContainer = styled.div`

  > span {
    width: 2.3rem;
    height: 2.3rem;
    background: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    margin-top: 6px;
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