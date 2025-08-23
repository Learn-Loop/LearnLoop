import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '@/services/api';
import type { AuthResponse } from '@/services/api';

interface AuthContextType {
  user: any | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (firstName: string, lastName: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      if (token) {
        try {
          const userData = await authAPI.getProfile();
          setUser(userData);
        } catch (error) {
          localStorage.removeItem('token');
          setToken(null);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, [token]);

  const login = async (email: string, password: string) => {
    const response: AuthResponse = await authAPI.login({ email, password });
    localStorage.setItem('token', response.token);
    setToken(response.token);
    
    const userData = await authAPI.getProfile();
    setUser(userData);
  };

  const signup = async (firstName: string, lastName: string, email: string, password: string) => {
    const response: AuthResponse = await authAPI.signup({ firstName, lastName, email, password });
    localStorage.setItem('token', response.token);
    setToken(response.token);
    
    const userData = await authAPI.getProfile();
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};