import styled from 'styled-components'

export const PageLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`

export const LogoContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  `
export const LogoImg = styled.img`
  width: 70%;
  max-width: 40rem;
  height: 70%;
  object-fit: cover;
  `
export const Title = styled.h3`
  width: 95%;
  max-width: 35rem;
  font: 400 2rem Roboto;
  color: var(--text-second);
  margin-top: 1.8rem;
  margin-bottom: 1.8rem;
`

export const Form = styled.form`
  width: 90%;
  max-width: 38rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`

export const Fieldset = styled.fieldset`
  width: 100%;
  border: 0;
  margin-bottom: 1.6rem;
`

export const ForgetLink = styled.p`
  line-height: 2.4rem;
  font: 500 1.7rem Roboto;
  color: var(--text-second);
`

export const BottonLink = styled.p`
  line-height: 2.4rem;
  font: 500 1.9rem Roboto;
  color: var(--text-primary);
`
