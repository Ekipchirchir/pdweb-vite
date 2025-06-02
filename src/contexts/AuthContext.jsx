import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('AuthContext: Checking stored token on mount:', token);
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log('AuthContext: Decoded token on mount:', decoded);
        setUser({
          accountId: decoded.userId,
          name: localStorage.getItem('userName') || 'User',
          email: localStorage.getItem('userEmail') || '',
          balance: localStorage.getItem('userBalance') || '0.00',
          currency: localStorage.getItem('userCurrency') || 'USD',
          phone: localStorage.getItem('userPhone') || 'N/A',
        });
        console.log('AuthContext: User set from stored token:', decoded.userId);
      } catch (error) {
        console.error('AuthContext: Invalid stored token:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userBalance');
        localStorage.removeItem('userCurrency');
        localStorage.removeItem('userPhone');
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log('AuthContext: User state updated:', user);
  }, [user]); // Log whenever user changes

  const login = (token, params = {}) => {
    console.log('AuthContext: Login called with token:', token, 'params:', params);
    try {
      const decoded = jwtDecode(token);
      console.log('AuthContext: Decoded token:', decoded);
      const userData = {
        accountId: decoded.userId,
        name: params.fullname ? decodeURIComponent(params.fullname) : 'User',
        email: params.email ? decodeURIComponent(params.email) : '',
        balance: params.balance || '0.00',
        currency: params.currency || 'USD',
        phone: params.phone || 'N/A',
      };
      console.log('AuthContext: Setting user data:', userData);
      setUser(userData);
      localStorage.setItem('token', token);
      localStorage.setItem('userName', userData.name);
      localStorage.setItem('userEmail', userData.email);
      localStorage.setItem('userBalance', userData.balance);
      localStorage.setItem('userCurrency', userData.currency);
      localStorage.setItem('userPhone', userData.phone);
      console.log('AuthContext: User set and token stored:', userData);
      return userData;
    } catch (error) {
      console.error('AuthContext: Login error:', error);
      throw new Error('Invalid token');
    }
  };

  const logout = () => {
    console.log('AuthContext: Logging out');
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userBalance');
    localStorage.removeItem('userCurrency');
    localStorage.removeItem('userPhone');
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}