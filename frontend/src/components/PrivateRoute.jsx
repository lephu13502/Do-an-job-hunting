import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import { Spinner } from 'react-bootstrap'
const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()
  if (checkingStatus) {
    return <Spinner animation="border" variant="warning" />
  }
  return loggedIn ? <Outlet /> : <Navigate to='/login' />
}
export default PrivateRoute