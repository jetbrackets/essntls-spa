import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1.25rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
`

export const PreviewContainer = styled.div`
  height: 200px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input[type='file'] {
    display: none;
  }

  label {
    font-family: 'Poppins', sans-serif;
    height: 100%;
    width: 100%;

    border: 1px solid #e5e5e5;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    border: none;
    color: var(--text-color);
    background: none;
    cursor: pointer;
    font-size: 12px;
  }
`

export const Preview = styled.div`
  background-size: cover;
  background-position: center center;
  height: 150px;
  width: 150px;
  margin-bottom: 1rem;

  &::after {
    content: '';
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  margin-top: 12px;

  input + input {
    margin-top: 12px;
  }

  p {
    margin-top: 24px;
  }

  & .custom-checkbox {
    margin-top: 1rem;

    &:checked {
      border: solid #269e97;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 4rem;
`

export const Button = styled.button`
  border: 1px solid var(--primary-color);
  padding: 0.5rem 1rem;
  background: #fff;
  margin: 0 0.5rem;
  color: var(--primary-color);
  text-transform: uppercase;
  font-weight: bold;

  svg {
    margin-right: 8px;
  }

  &.add-button {
    background: var(--primary-color);
    color: #fff;
  }
`
