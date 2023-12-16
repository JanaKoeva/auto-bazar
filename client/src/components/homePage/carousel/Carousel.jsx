const Carousel = () => {
	return (
		<div className="allcontain" style={{
			maxHeight: '20%!important',
			margin:'1 0 auto auto',
			minHeight:'20%',
		}}>
			<div id="carousel-up" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner " role="listbox" style={{
					maxHeight:'500px',
					marginBottom:'0em',
				}}>
					<div className="item active" >
						<img src="image/oldcar.jpg" alt="oldcar" />
						<div className="carousel-caption">
							<h2>Porsche 356</h2>
							<p>The 356 is a lightweight and nimble-handling, rear-engine, rear-wheel drive,<br />
								two-door available both in hardtop coupé and open configurations </p>
						</div>
					</div>
					<div className="item">
						<img src="image/porche.jpg" alt="porche" />
						<div className="carousel-caption">
							<h2>Porsche Classic</h2>
							<p>Here you can enjoy an overview of model that benefit from Porsche Classic support<br />
								and detailed vehicle information about the different variants.</p>
						</div>
					</div>
					<div className="item">
						<img src="image/benz.jpg" alt="benz" />
						<div className="carousel-caption">
							<h2>Mercedes</h2>
							<p>Looking for the Mercedes-Benz of your dreams?<br />
								There are currently 1008 Mercedes-Benz-iconic classic and collectors car</p>
						</div>
					</div>
				</div>
				<nav className="navbar navbar-default midle-nav">
					<div className="navbar-header">

					</div>
					<div className="collapse navbar-collapse" id="navbarmidle">


						<ul className="nav navbar-nav navbarborder">
							<li className="li-category">

							</li>
							{/* <li className="li-minyear"><a className="btn  dropdown-toggle btn-costume"  id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Min Year <span className="glyphicon glyphicon-chevron-down downicon"></span></a>
						
					</li>
					<li className="li-maxyear"><a className="btn dropdown-toggle btn-costume"  id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Max Year <span className="glyphicon glyphicon-chevron-down downicon"></span></a>
						<ul className="dropdown-menu" id="mydd3">
							
						</ul>
					</li> */}
							<li className="li-slideprice">
								{/* <p> <label className="slidertxt" htmlFor="amount">Price </label>
							<input className="priceslider" type="text" id="amount" readOnly="readonly"/>
						</p> */}
								<div id="slider-range"></div>

							</li>

						</ul>

					</div>
				</nav>
			</div>
		</div>
	);
};
export default Carousel;