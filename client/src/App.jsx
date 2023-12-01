
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react'

import * as authService from './services/authService';
import AuthContext from './context/authContext';
import Path from './paths';

import Header from "./components/header/header/Header"
import Footer from "./components/footer/footer/Footer"
import HomePage from "./components/homePage/homePageApp"
import CatalogPage from "./components/catalogPage/CatalogPage"
import PostNewCar from './components/postNewCar/PostNewCar'
import LoginPage from './components/login/LoginPage'
import RegisterPage from './components/register/RegisterPage'
import CarDetails from './components/carDetails/CarDetails'
import Logout from './components/logout/Logout';



function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {};
  });

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
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthContext.Provider value={values}>
      <>
        <Header />
        <Routes>
          <Route path={Path.Home} element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/create' element={<PostNewCar />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path={Path.Logout} element={<Logout />} />
          <Route path='/catalog/:carId' element={<CarDetails />} />


        </Routes>
        <Footer />
      </>
    </AuthContext.Provider>
  )
}

export default App
