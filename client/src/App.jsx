
import {Routes,Route} from 'react-router-dom'
import Header from "./components/header/header/Header"
import Footer from "./components/footer/footer/Footer"
import HomePage from "./components/homePage/homePageApp"
import CatalogPage from "./components/catalogPage/CatalogPage"
import PostNewCar from './components/postNewCar/PostNewCar'
import LoginPage from './components/login/LoginPage'
import RegisterPage from './components/register/RegisterPage'
import CarDetails from './components/carDetails/CarDetails'



function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/catalog' element={<CatalogPage/>}/>
      <Route path='/create' element={<PostNewCar/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/catalog/:carId' element={<CarDetails/>}/>


    </Routes>
    <Footer/>
    </>
  )
}

export default App
