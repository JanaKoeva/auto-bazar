import { useEffect, useState } from "react"
import * as carService from '../../../services/carServices'
import LatestCar from "./latestCar";
import { Link } from "react-router-dom";

export default function LatestCars() {

	const [latestCars, setLatestCars] = useState([]);

	useEffect(() => {
		carService.getLatest()
			.then(result => setLatestCars(result))
	}, [])

	return (
		<>
			<div className="latestcars">
				<h1 className="text-center">&bull; LATEST   CARS &bull;</h1>
				
			</div>
			<br />
			<br />
			<div className="grid">
				<div className="row" key="car._id">
					{latestCars.map(car => <LatestCar  {...car}/>)}
					
						{!latestCars.length&&<p>No cars yet</p>}
					
				</div>
			</div>
		</>
	)
}