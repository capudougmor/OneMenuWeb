import styled from 'styled-components'

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
  display: flex;
  justify-items: space-between;
  align-items: flex-end;
`
export const CheckContent = styled.div`
  width: 10rem;
  height: 8rem;
  display: flex;
  justify-content: center;

  > input {
    width: 2.3rem;
    height: 2.3rem;
    cursor: pointer;
    margin-right: 3;
  }  
`
