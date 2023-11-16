const Carousel=()=>{
    return(
        <div className="allcontain">
	<div id="carousel-up" className="carousel slide" data-ride="carousel">
		<div className="carousel-inner " role="listbox">
			<div className="item active">
				<img src="image/oldcar.jpg" alt="oldcar"/>
				<div className="carousel-caption">
					<h2>Porsche 356</h2>
					<p>Lorem ipsum dolor sit amet, consectetur ,<br/>
						sed do eiusmod tempor incididunt ut labore </p>
				</div>
			</div>
			<div className="item">
				<img src="image/porche.jpg" alt="porche"/>
				<div className="carousel-caption">
					<h2>Porche</h2>
						<p>Lorem ipsum dolor sit amet, consectetur ,<br/>
						sed do eiusmod tempor incididunt ut labore </p>
				</div>
			</div>
			<div className="item">
				<img src="image/benz.jpg" alt="benz"/>
				<div className="carousel-caption">
					<h2>Car</h2>
					<p>Lorem ipsum dolor sit amet, consectetur ,<br/>
						sed do eiusmod tempor incididunt ut labore </p>
				</div>
			</div>
		</div>
		<nav className="navbar navbar-default midle-nav">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed textcostume" data-toggle="collapse" data-target="#navbarmidle" aria-expanded="false">
						<h1>SEARCH TEXT</h1>
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
			</div>
			<div className="collapse navbar-collapse" id="navbarmidle">
				<div className="searchtxt">
					<h1>SEARCH TEXT</h1>
				</div>
				<form className="navbar-form navbar-left searchformmargin" role="search">
					<div className="form-group">
						<input type="text" className="form-control searchform" placeholder="Enter Keyword"/>
					</div>
				</form>
				<ul className="nav navbar-nav navbarborder">
					<li className="li-category">
						<a className="btn  dropdown-toggle btn-costume"  id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Category<span className="glyphicon glyphicon-chevron-down downicon"></span></a>
						<ul className="dropdown-menu" id="mydd">
							<li><a href="#">Epic</a></li>
							<li><a href="#">Old</a></li>
							<li><a href="#">New</a></li>
						</ul>
					</li>
					<li className="li-minyear"><a className="btn  dropdown-toggle btn-costume"  id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Min Year <span className="glyphicon glyphicon-chevron-down downicon"></span></a>
						<ul className="dropdown-menu" id="mydd2">
							<li><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
						</ul>
					</li>
					<li className="li-maxyear"><a className="btn dropdown-toggle btn-costume"  id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Max Year <span className="glyphicon glyphicon-chevron-down downicon"></span></a>
						<ul className="dropdown-menu" id="mydd3">
							<li><a href="#">1900</a></li>
							<li><a href="#">2000</a></li>
							<li><a href="#">2016</a></li>
						</ul>
					</li>
					<li className="li-slideprice">
						<p> <label className="slidertxt" htmlFor="amount">Price </label>
							<input className="priceslider" type="text" id="amount" readOnly="readonly"/>
						</p>
							<div id="slider-range"></div>
							
					</li>
					<li className="li-search"> <button className="searchbutton"><span className="glyphicon glyphicon-search "></span></button></li>
				</ul>
 
			</div>
		</nav>
	</div>
</div>
    );
};
export default Carousel;