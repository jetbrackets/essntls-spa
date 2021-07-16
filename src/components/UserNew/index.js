import { useNavigate } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'

import * as S from './style'
import { ADD_USER } from '../../service/api'

const UserNew = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')

  const token = window.localStorage.getItem('token')
  const navigate = useNavigate()

  const handleNewUser = async (body) => {
    body = {
      email,
      password,
      name,
      phone,
      type: 'admin',
      address,
      zip_code: zipcode,
      city,
      state,
      country
    }

    const { url, options } = ADD_USER(body, token)
    const response = await fetch(url, options)
    const json = await response.json()

    if (response.ok) navigate('/users')

    return json
  }

  return (
    <>
      <S.Wrapper>
        <S.Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <S.Input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <S.Input
          type="password"
          placeholder="password"
          name="password"
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
        <S.Input
          type="text"
          name="address"
          placeholder="Address"
          value={address}
          onChange={({ target }) => setAddress(target.value)}
        />
        <S.Input
          type="text"
          name="zipcode"
          placeholder="Zip code"
          value={zipcode}
          onChange={({ target }) => setZipcode(target.value)}
        />
        <S.Input
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={({ target }) => setCity(target.value)}
        />
        <S.Input
          type="text"
          name="state"
          placeholder="State"
          value={state}
          onChange={({ target }) => setState(target.value)}
        />
        <S.Input
          type="text"
          name="country"
          placeholder="Country"
          value={country}
          onChange={({ target }) => setCountry(target.value)}
        />
      </S.Wrapper>
      <S.Button className="add-button" onClick={handleNewUser}>
        Add
      </S.Button>
      <S.Button className="mr" onClick={() => navigate('/users')}>
        Cancel
      </S.Button>
    </>
  )
}

export default UserNew
