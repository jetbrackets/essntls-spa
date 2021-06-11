import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import CustomRoute from './CustomRoutes'

const ProtectedRoute = (props) => {
  const { login } = useContext(UserContext)

  if (login === true) return <CustomRoute {...props} />
  else if (login === false) return <Navigate to="/" />
  else return null
}

export default ProtectedRoute
