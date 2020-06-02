import { useState, useCallback, useEffect } from 'react';

let logoutTimer;

export const Auth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);
  const [adtoken, setadToken] = useState(false);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString()
      })
    );
    
  }, []);

  const adminLogin = useCallback((uid, adtoken, expirationDate) => {
    setadToken(adtoken);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'adminData',
      JSON.stringify({
        userId: uid,
        token: adtoken,
        expiration: tokenExpirationDate.toISOString()
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem('userData');
   

  }, []);

  const adminlogout = useCallback(() => {
    setadToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem('adminData');
   

  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  }, [login]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('adminData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      adminLogin(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  }, [adminLogin]);

  return { token, adtoken, login, adminLogin, adminlogout, logout, userId };
};