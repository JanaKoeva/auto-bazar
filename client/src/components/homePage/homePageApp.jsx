import Carousel from "./carousel/Carousel"
import FeaturesCars from "./featuresCars/FeaturesCars"
import LatestCars from "./latestCars/LatestCars"
import NewsLetters from "./newsLetter/NewsLetter"
import styles from '../homePage/HomePage.module.css'

export default function HomePage() {
  

  return (
    <>
    <Carousel/>
    <FeaturesCars/>
    <LatestCars/>
    <NewsLetters/>
  
    </>
  )
}


