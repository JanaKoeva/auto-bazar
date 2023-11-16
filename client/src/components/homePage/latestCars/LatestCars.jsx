export default function LatestCars(){
    return(
        <>
        <div className="latestcars">
	<h1 className="text-center">&bull; LATEST   CARS &bull;</h1>
	<ul className="nav nav-tabs navbar-left latest-navleft">
		<li role="presentation" className="li-sortby"><span className="sortby">SORT BY: </span></li>
		<li data-filter=".RECENT" role="presentation"><a href="#mostrecent" className="prcBtnR">MOST RECENT </a></li>
		<li data-filter=".POPULAR" role="presentation"><a href="#mostpopular" className="prcBtnR">MOST POPULAR </a></li>
		<li  role="presentation"><a href="#" className="alphSort">ALPHABETICAL </a></li>
		<li data-filter=".HPRICE" role="presentation"><a href="#" className="prcBtnH">HIGHEST PRICE </a></li>
		<li data-filter=".LPRICE" role="presentation"><a href="#" className="prcBtnL">LOWEST  PRICE </a></li>
		<li id="hideonmobile"></li>
	</ul>
</div>
<br/>
<br/>
        <div className="grid">
		<div className="row">
			<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<div className="txthover">
					<img src="image/car1.jpg" alt="car1"/>
						<div className="txtcontent">
							<div className="stars">
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
							</div>
							<div className="simpletxt">
								<h3 className="name">Rolls Royce</h3>
								<p>&quot;Lorem ipsum dolor sit amet, consectetur,<br/>
								sed do eiusmod tempor incididunt&quot; </p>
								<h4 className="price"> 1000&euro;</h4>
								<button>READ MORE</button><br/>
								<div className="wishtxt">
									<p className="paragraph1"> Add to Wishlist <span className="glyphicon glyphicon-heart"></span> </p>
								<p className="paragraph2">Compare <span className="icon"><img src="image/compicon.png" alt="compicon"/></span></p>
								</div>
							</div>
							<div className="stars2">
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
							</div>
						</div>
				</div>	 
			</div>
			<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 ">
				<div className="txthover">
					<img src="image/car2.jpg" alt="car2"/>
						<div className="txtcontent">
							<div className="stars">
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
							</div>
							<div className="simpletxt">
								<h3 className="name">Renault</h3>
								<p>&quot;Lorem ipsum dolor sit amet, consectetur,<br/>
							sed do eiusmod tempor incididunt&quot; </p>
								<h4 className="price">900 &euro;</h4>
								<button>READ MORE</button><br/>
								<div className="wishtxt">
									<p className="paragraph1"> Add to Wishlist <span className="glyphicon glyphicon-heart"></span> </p>
									<p className="paragraph2">Compare <span className="icon"><img src="image/compicon.png" alt="compicon"/></span></p>
								</div>
							</div>
							<div className="stars2">
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
							</div>
						</div>
				</div>	 
			</div>
			<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<div className="txthover">
					<img src="image/car3.jpg" alt="car3"/>
						<div className="txtcontent">
							<div className="stars">
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
							</div>
							<div className="simpletxt">
								<h3 className="name">Ford Mustang</h3>
								<p>&quot;Lorem ipsum dolor sit amet, consectetur,<br/>
							sed do eiusmod tempor incididunt&quot; </p>
								<h4 className="price">3000 &euro;</h4>
								<button>READ MORE</button><br/>
							<div className="wishtxt">
									<p className="paragraph1"> Add to Wishlist <span className="glyphicon glyphicon-heart"></span> </p>
									<p className="paragraph2">Compare <span className="icon"><img src="image/compicon.png" alt="compicon"/></span></p>
							</div>
							</div>
							<div className="stars2">
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
							</div>
						</div>
				</div>	 
			</div>
			<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<div className="txthover">
					<img src="image/car4.jpg" alt="car4"/>
						<div className="txtcontent">
							<div className="stars">
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
							</div>
							<div className="simpletxt">
								<h3 className="name">Rover</h3>
								<p>&quot;Lorem ipsum dolor sit amet, consectetur,<br/>
								sed do eiusmod tempor incididunt&quot; </p>
							<h4 className="price">1000 &euro;</h4>
								<button>READ MORE</button><br/>
								<div className="wishtxt">
									<p className="paragraph1"> Add to Wishlist <span className="glyphicon glyphicon-heart"></span> </p>
								<p className="paragraph2">Compare <span className="icon"><img src="image/compicon.png" alt="compicon"/></span></p>
								</div>
							</div>
							<div className="stars2">
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
								<div className="glyphicon glyphicon-star"></div>
							</div>
						</div>
				</div>	 
			</div>
				
		</div>
	</div>
    </>
    )
}