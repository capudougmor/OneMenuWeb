import styled from 'styled-components'

export const Card = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: start;
  background-color: var(--background-secondary);

  > button {
    width: 90%;
    max-width: 38rem;
  }
`

export const Container = styled.div`
  width: 90%;
  max-width: 38rem; 
`

export const CardContent = styled.div`
  margin-top: 3rem;
  padding: 3.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: var(--background);
  border-radius: 8px;

  > button {
    margin-top: 3rem;
  }
`

