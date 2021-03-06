import { useContext } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const ProtectedRoute = (props) => {
  const { login } = useContext(UserContext)

  if (login === true) return <Route {...props} />
  else if (login === false) return <Navigate to="/" />
  else return null
}

export default ProtectedRoute
