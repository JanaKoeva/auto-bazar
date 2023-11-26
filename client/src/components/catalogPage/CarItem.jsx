import { Link } from "react-router-dom";

export default function CarItem({
	_id, image, model, price, text

}) {

	return (
		<>
			<div className="col-lg-6 costumcol colborder2">
				<div className="row costumrow">
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img2colon">
						<img src={image} alt="imageUrl" />
					</div>
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon ">
						<div className="featurecontant">
							<h1>{model}</h1>
							<p>{text}</p>
							<h2>{price} &euro;</h2>
							<button id="btnRM2"><Link to={`/catalog/${_id}`}>READ MORE</Link></button>

						</div>
					</div>
				</div>
			</div>
			
		</>
	)
}
