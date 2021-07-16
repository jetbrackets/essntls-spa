import { useCallback, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import * as S from './style'
import { EDIT_USER, GET_USER } from '../../service/api'

const UserEdit = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const token = window.localStorage.getItem('token')
  const param = useParams()
  const navigate = useNavigate()

  const { id } = param

  const handleUpdateUser = async (id) => {
    const data = {
      name,
      email,
      password,
      phone
    }
    const { url, options } = EDIT_USER(token, data, id)
    const response = await fetch(url, options)
    const json = await response.json()

    if (response.ok) navigate('/users')

    return json
  }

  const handleUser = useCallback(
    async (id) => {
      const { url, options } = GET_USER(token, id)
      const response = await fetch(url, options)
      const json = await response.json()
      const { admin } = json

      if (admin) {
        setName(admin.name)
        setEmail(admin.email)
        setPhone(admin.phone)
      }
    },
    [token]
  )

  useEffect(() => {
    handleUser(id)
  }, [handleUser, id])

  return (
    <S.Wrapper>
      <div>
        <S.Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <S.Input
          type="email"
          name="name"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        <S.Input
          type="password"
          name="password"
          placeholder="New password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <S.Input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />

        <div>
          <S.Button className="save" onClick={() => handleUpdateUser(id)}>
            Save
          </S.Button>
          <S.Button onClick={() => navigate('/users')}>Cancel</S.Button>
        </div>
      </div>
    </S.Wrapper>
  )
}

export default UserEdit
