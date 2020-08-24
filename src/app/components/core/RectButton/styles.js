import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  min-width: 25rem;
  height: 5rem;
  margin: 2rem 0;
  padding: 2rem 0;
  background: var(--primary);
  color: var(--button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.8rem Roboto;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background: var(--secundary-dark);
  }
`