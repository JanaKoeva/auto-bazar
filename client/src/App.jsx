
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
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
import CarEdit from './components/carEdit/CarEdit';
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/guards/AuthGuard';
import Page404 from './components/page404/Page404';



function App() {

  return (
    <ErrorBoundary>
      <AuthProvider>
        <>
          <Header />
          <Routes>
            <Route path={Path.Home} element={<HomePage />} />
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/catalog/:carId' element={<CarDetails />} />
            <Route path='*' element={<Page404 />} />


            <Route element={<AuthGuard />}>
              <Route path='/create' element={< PostNewCar />} />
              <Route path='/catalog/:carId/edit' element={<CarEdit />} />
              <Route path={Path.Logout} element={<Logout />} />
            </Route>

          </Routes>
          <Footer />
        </>
      </AuthProvider>
    </ErrorBoundary>

  )
}

export default App
