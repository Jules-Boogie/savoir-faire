import React from 'react'

const AuthenticationContext = React.createContext({
    isLoggedIn: false,
    userId: null,
    token: null,
    login: () => {},
    logout: () => {},
    isAdmin:false,
    adminLogin: () => {}
})

export default AuthenticationContext;