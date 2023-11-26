import { useEffect, useState } from "react";
import * as carService from '../../services/carServices'
import CarItem from "./CarItem";
import styles from '../catalogPage/CatalogPage.module.css';

const CatalogPage = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result))
    }, []);
    console.log(cars);
    return (
        <>
            <div className="allcontain">
                <div className="feturedsection">
                    <h1 className="text-center"><span className="bdots">&bull;</span>F E A T U R E S<span className="carstxt">C A R S</span>&bull;</h1>
                </div>
                <div className={styles.feturedimage}>
                    <div className="row firstrow " >
                        <div className={styles.CostumcolColborder1}>
                            <div className={styles.rowCostumrow}>
                               
                                {cars.map(car=>(
                                    < CarItem key={car._id} {...car}/>
                                )
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default CatalogPage;