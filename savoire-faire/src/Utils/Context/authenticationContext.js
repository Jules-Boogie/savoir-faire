import React from 'react'

const AuthenticationContext = React.createContext({
    loggedIn: false,
    isAdmin:false,
    logIn: () => {},
    adminLogin: () => {},
    adminlogOut: () => {},
    logOut: () => {}
})

export default AuthenticationContext;