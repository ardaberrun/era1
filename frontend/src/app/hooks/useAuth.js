import { useEffect, useState } from 'react';
import UserService from '../services/UserService';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStorage = localStorage.getItem('user');

    if (userStorage) {
      setUser({...JSON.parse(userStorage)});
    }
  }, []);

  const login = async (loginInfo) => {
    try {
      const { data } = await UserService.signIn(loginInfo);

      setUser(data);

      localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
      console.error('Giriş hatası:', error);

      throw error;
    }
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem('user');
  };

  return { user, login, logout };
};

export default useAuth;
