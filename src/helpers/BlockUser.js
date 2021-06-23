import { BLOCK_USER } from '../service/api'

const BlockUser = async (id) => {
  const token = window.localStorage.getItem('token')

  const { url, options } = BLOCK_USER(token, id)

  const response = await fetch(url, options)
  const json = await response.json()
}

export default BlockUser
