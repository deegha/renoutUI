'use client';

import React, { useContext, useState, useEffect } from 'react';
import { login as loginAction } from '@/services/authenticationService';
import { User } from '@/services/d';
import { getUser } from '@/services/authenticationService';

interface IAuthContext {
  authenticated: boolean | 'loading';
  loading: boolean;
  user: User | null;
  logout: () => void;
  // eslint-disable-next-line no-unused-vars
  login: (email: string, password: string) => void;
}

interface IProps {
  children: React.ReactNode;
}

const authContextDefaultValues: IAuthContext = {
  authenticated: false,
  user: null,
  loading: false,
  logout: () => {
    return false;
  },
  login: () => {
    return false;
  },
};

const AuthContext = React.createContext(authContextDefaultValues);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<IProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean | 'loading'>(
    'loading',
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setLoading(true);
    getUser()
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((e) => {
        setUser(null);
        console.log(e.message);
        setLoading(false);
      });
  }, []);

  const logout = () => {
    setAuthenticated(false);
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    const response = await loginAction(email, password);

    if (!response.success) {
      setAuthenticated(false);
      setLoading(false);
      return;
    }
    setAuthenticated(true);
    setAuthUser(response.data);
    console.log(window, 'window');
    if (typeof window !== 'undefined') {
      console.log('settgin token in local storage.');
      localStorage.setItem('token', response.token);
      console.log('token is set');
    } else {
      console.log('Could not set token in local storage.');
    }

    setLoading(false);
  };

  const setAuthUser = (use: User) => {
    setUser(use);
  };

  const value = {
    authenticated,
    loading,
    user,
    logout,
    login,
    setAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
