
import {Routes,Route} from 'react-router-dom'
import Header from "./components/header/header/Header"
import Footer from "./components/footer/footer/Footer"
import HomePage from "./components/homePage/homePageApp"
import CatalogPage from "./components/catalogPage/CatalogPage"



function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/catalog' element={<CatalogPage/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
