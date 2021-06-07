import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
`
export const Banner = styled.div`
  width: 50vw;
  height: 100vh;
  background: #1e2a36;
`
export const FormLogin = styled.div`
  padding: 2rem;

  > img {
    margin-bottom: 1rem;
  }
`
export const Logo = styled.div``
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  margin-bottom: 1.25rem;
  min-height: 35px;
  padding: 0 1rem;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
`

export const ButtonLogin = styled.button`
  min-height: 35px;
  background: #1e2a36;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background: #314559;
  }
`
