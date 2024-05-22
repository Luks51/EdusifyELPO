import React from 'react'
import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'

function ProtectedRoutesAfter() {
  const { auth, setAuth } = useContext(AuthContext)

  return !auth.status ? <Outlet/> : <Navigate to="/learn"/>
}

export default ProtectedRoutesAfter