import styles from '../postNewCar/PostNewCar.module.css'

export default function PostNewCar(){
    return(<div className={styles.allcontain}>
	<div className='contact'>
		<div className="newslettercontent">
			<div className="leftside">
				<img id="image_border" src="image/border.png" alt="border"/>
					<div className="contact-form">
						<h1>Post New Car</h1>
							<div className="form-group group-coustume">
								<input type="text" className="form-control make-form" placeholder="Make"/>
								<input type="text" className="form-control model-form" placeholder="Model"/>
								<input type="text" className="form-control year-form" placeholder="Year"/>
								<input type="text" className="form-control mileage-form" placeholder="Mileage"/>
								<input type="text" className="form-control location-form" placeholder="Location"/>
								<input type="number" className="form-control price-form" placeholder="Price"/>
								<input type="img" className="form-control img-form" placeholder="Add your picture"/>
								<textarea rows="4" cols="50" className="message-form" placeholder="e.g. color, condition, previous owners">Description-Tell us a bit about your car</textarea>
								<button type="submit" className="btn btn-default btn-submit">Submit</button>
							</div>
					</div>
			</div>
			
		</div>
       
		
	</div>
</div>)

}