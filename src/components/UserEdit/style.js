import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
`

export const Button = styled.button`
  border: 1px solid var(--primary-color);
  padding: 0.5rem 1rem;
  background: #fff;
  margin: 0.5rem 0;
  color: var(--primary-color);
  text-transform: uppercase;
  font-weight: bold;

  svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }

  &.save {
    background: var(--primary-color);
    color: #fff;
    margin-right: 1rem;
  }
`
