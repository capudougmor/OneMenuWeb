import styled from 'styled-components'

export const PageAlertRegister = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: start;
  background-color: var(--background-secondary);
  `

export const Container = styled.div`
  width: 90%;
  max-width: 38rem; 
`

export const Card = styled.div`
  margin-top: 3rem;
  padding: 3.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: var(--background);
  border-radius: 8px;

  > a {
    width: 24rem;
  }
`

export const Title = styled.div`
  width: 26rem;
  margin-top: 3rem;
  text-align: center;
  font: 700 2.2rem Roboto;
  color: var(--text-primary);
`

export const SubTitle = styled.div`
  margin-top: 3rem;
  text-align: center;
  font: 400 1.9rem Roboto;
  color: var(--text-second);
`
