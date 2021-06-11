import { createContext, useState, useCallback, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { TOKEN_POST } from '../service/api'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const userLogout = useCallback(
    async function () {
      setData(null)
      setError(null)
      setLogin(null)

      window.localStorage.removeItem('token')
      navigate('/')
    },
    [navigate]
  )

  const userLogin = async (email, password) => {
    try {
      const { url, options } = TOKEN_POST({ email, password })
      const response = await fetch(url, options)
      const json = await response.json()

      if (!response.ok) throw new Error(`Erro: ${response.statusText}`)

      window.localStorage.setItem('token', json.token)

      setLogin(true)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
      setLogin(false)
    }
  }

  useEffect(() => {
    async function automaticLogin() {
      const token = window.localStorage.getItem('token')

      if (token) {
        try {
          setError(null)

          setLogin(true)
        } catch (error) {
          userLogout()
        }
      } else {
        setLogin(false)
      }
    }
    automaticLogin()
  }, [userLogout])

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, login, error }}>
      {children}
    </UserContext.Provider>
  )
}
