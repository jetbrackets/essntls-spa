import { APPROVE_USER } from '../service/api'

const ApproveUser = async (id) => {
  const token = window.localStorage.getItem('token')
  const { url, options } = APPROVE_USER(token, id)

  const response = await fetch(url, options)
  const json = await response.json()

  return json
}

export default ApproveUser
