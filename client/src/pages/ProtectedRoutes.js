import React from 'react'
import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'

function ProtectedRoutes() {
  const { auth, setAuth } = useContext(AuthContext)

  return auth.status ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoutes