import { createContext } from "react"
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import Path from "../paths";
import usePersistentState from "../hooks/usePersistentState";

const AuthContext = createContext();

export const AuthProvider = ({ 
  // eslint-disable-next-line react/prop-types
  children,
 }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistentState('auth', {});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password)
    setAuth(result)
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Path.Home)
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.username, values.email, values.password);
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    console.log(auth);
    navigate(Path.Home);
  }
  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');

  }

  const values = {
    registerSubmitHandler,
    loginSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId:auth._id,
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;