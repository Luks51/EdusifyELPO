import React from 'react'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [ auth, setAuth ] = useState({
    id: 0,
    name: "",
    surname: "",
    username: "",
    email: "",
    status: false
  })
  const [ authFinish, setAuthFinish ] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:3001/auth/user", { withCredentials: true }).then((res) => {
      if (res.data.auth) {
        setAuthFinish(true)
        setAuth({
          id: res.data.user.id,
          name: res.data.user.name,
          surname: res.data.user.surname,
          username: res.data.user.username,
          email: res.data.user.email,
          status: true
        })
      }
      else {
        setAuthFinish(true)
      }
    })
  }, [])
  
  if (authFinish) {
    return <AuthContext.Provider value={{ auth, setAuth }}>{props.children}</AuthContext.Provider>
  }
}

export default AuthContextProvider