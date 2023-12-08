import { useEffect, useState } from "react";
import * as carService from '../../services/carServices'
import CarItem from "./CarItem";
import styles from '../catalogPage/CatalogPage.module.css';
import { Link } from "react-router-dom";

const CatalogPage = () => {
    const [cars, setCars] = useState([]);
    

    const sortAlphabetical = () => {
        const sortedCars = [...cars].sort((a, b) => a.model.localeCompare(b.model));
        setCars(sortedCars);
    };
    const sortResent= () => {
        const sortedCars = [...cars].sort((a, b) => b._createdOn.localeCompare(a._createdOn));
        setCars(sortedCars);
    };

    const sortPriceHigh= () => {
        const sortedCars = [...cars].sort((a, b) => b.price.localeCompare(a.price));
        setCars(sortedCars);
    };

    const sortPriceLow= () => {
        const sortedCars = [...cars].sort((a, b) => a.price.localeCompare(b.price));
        setCars(sortedCars);
    };


    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result));

    }, []);
    console.log(cars);
    return (
        <>
            <div className="allcontain">
            
                <div className="feturedsection">
                    <h1 className="text-center"><span className="bdots">&bull;</span>C A T A L O G<span className="carstxt">C A R S</span>&bull;</h1>
                </div>
                <ul className="nav nav-tabs navbar-left latest-navleft">
					<li role="presentation" className="li-sortby"><span className="sortby">SORT BY: </span></li>
					<li data-filter=".RECENT" role="presentation"><Link to="#" onClick={sortResent}  className="prcBtnR">MOST RECENT </Link></li>
					<li data-filter=".POPULAR" role="presentation"><a href="#mostpopular" className="prcBtnR">MOST POPULAR </a></li>
					<li role="presentation"><Link to="#" onClick={sortAlphabetical} className="alphSort">ALPHABETICAL </Link></li>
					<li data-filter=".HPRICE" role="presentation"><Link to="#" onClick={sortPriceHigh} className="prcBtnH">HIGHEST PRICE </Link></li>
					<li data-filter=".LPRICE" role="presentation"><Link to="#" onClick={sortPriceLow} className="prcBtnL">LOWEST  PRICE </Link></li>
					<li id="hideonmobile"></li>
				</ul>
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