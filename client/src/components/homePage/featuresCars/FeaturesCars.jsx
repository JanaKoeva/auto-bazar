import { useEffect, useState } from "react"
import * as carService from '../../../services/carServices'
import FutureCar from "./FutureCar";
import styles from './stylesFeatureCars.css';


const FeaturesCars = () => {

    const [futureCars, setFutureCars] = useState([]);

    useEffect(() => {
        carService.getFutureCars()
            .then(result => setFutureCars(result))
    }, [])

    return (
    
            <div className={styles}>
                <div className="feturedsection">
                    <h1 className="text-center"><span className="bdots">&bull;</span>F E A T U R E S<span className="carstxt">C A R S</span>&bull;</h1>
                </div>
                <div className="feturedimage">
                    <div className="row firstrow" >
                        {futureCars.map(car => <FutureCar  key={car._id} {...car} />)}
                    </div>
                </div>
            </div>
        
    )
}

export default FeaturesCars;