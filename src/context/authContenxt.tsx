"use client";

import React, { useContext, useState, useEffect } from "react";
import { login as loginAction } from "@/services/authenticationService";
import { User } from "@/services/d";

interface IAuthContext {
  authenticated: boolean | "loading";
  loading: boolean;
  user: unknown;
  logout: () => void;
  login: (email: string, password: string) => void;
}

interface IProps {
  children: React.ReactNode;
}

const authContextDefaultValues: IAuthContext = {
  authenticated: false,
  user: {},
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
  const [authenticated, setAuthenticated] = useState<boolean | "loading">(
    "loading"
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

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
