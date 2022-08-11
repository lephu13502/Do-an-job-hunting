import { useEffect, useState, useRef } from 'react'
import { loginSuccess } from '../redux/authSlice'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  const isMounted = useRef(true)
  useEffect(() => {
    if (isMounted) {
      if(loginSuccess()) {
        setLoggedIn(true)
      }
      setCheckingStatus(false)
    }
    return () => {
      isMounted.current = false
    }
  }, [isMounted])
  return { loggedIn, checkingStatus }
}

