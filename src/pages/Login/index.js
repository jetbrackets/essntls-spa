import { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'

import BrandImage from '../../assets/images/essntl.svg'

import { UserContext } from '../../context/userContext'

import * as S from './style'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassord] = useState('')

  const { userLogin, error, login } = useContext(UserContext)

  if (login === true) return <Navigate to="/dashboard" />

  function handleLogin(event) {
    event.preventDefault()
    userLogin(email, password)
  }

  return (
    <>
      <S.Wrapper>
        <S.Banner />
        <S.FormLogin>
          <img src={BrandImage} alt="" />
          <S.Form onSubmit={handleLogin}>
            <S.Input
              type="text"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              placeholder="e-mail"
            />
            <S.Input
              type="password"
              value={password}
              onChange={({ target }) => setPassord(target.value)}
              placeholder="password"
            />
            <S.ButtonLogin>Login</S.ButtonLogin>
            {error && <p>{error}</p>}
          </S.Form>
        </S.FormLogin>
      </S.Wrapper>
    </>
  )
}

export default LoginForm
