import styles from '../postNewCar/PostNewCar.module.css'
import * as carService from '../../services/carServices';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FORM_KEYS = {
	make: "manufacturer",
	model: 'model',
	year: 'year',
	mileage: 'mileage',
	location: 'location',
	price: 'price',
	image: 'image',
	text: 'text',

}

const formInitialState = {
	[FORM_KEYS.manufacturer]: '',
	[FORM_KEYS.model]: '',
	[FORM_KEYS.mileage]: '',
	[FORM_KEYS.location]: '',
	[FORM_KEYS.price]: '',
	[FORM_KEYS.image]: '',
	[FORM_KEYS.text]: '',
	[FORM_KEYS.year]: '',
}
export default function PostNewCar() {
	const makeInputRef = useRef();
	const navigate = useNavigate();
	const [formValues, setFormValues] = useState(formInitialState);

	useEffect(() => {
		makeInputRef.current.focus();
	}, [])
	const changeHandler = (e) => {
		setFormValues(state => ({
			...state,
			[e.target.name]: e.target.value
		}))
	};

	// const [makeValue, setMakeValue]=useState('');
	// const [modelValue, setModelValue]=useState('');
	// const [yearValue, setYearValue]=useState('');
	// const [mileageValue, setMileageValue]=useState('');
	// const [locationValue, setLocationValue]=useState('');
	// const [priceValue, setPriceValue]=useState('');
	// const [imageValue, setImageValue]=useState('');
	// const [textValue, setTextValue]=useState('');


	// const makeChangeHandler=(e)=>{
	// 	setMakeValue(e.target.value)
	// };
	// const modelChangeHandler=(e)=>{
	// 	setModelValue(e.target.value)
	// };
	// const yearChangeHandler=(e)=>{
	// 	setMakeValue(e.target.value)
	// };
	// const locationChangeHandler=(e)=>{
	// 	setLocationValue(e.target.value)
	// };
	// const mileageChangeHandler=(e)=>{
	// 	setMileageValue(e.target.value)
	// };
	// const priceChangeHandler=(e)=>{
	// 	setPriceValue(e.target.value)
	// };
	// const imageChangeHandler=(e)=>{
	// 	setImageValue(e.target.value)
	// };
	// const textChangeHandler=(e)=>{
	// 	setTextValue(e.target.value)
	// };

	const resetFormHandler = () => {
		setFormValues(formInitialState)
	}
	const createNewCarSubmitHandler = async (e) => {
		e.preventDefault();
		const data = formValues
		try {
			await carService.create(data);
			navigate('/catalog')
			resetFormHandler();
		} catch (err) {
			console.log(err);
		}

	}

	return (
		<div className={styles.allcontain}>
			<div className='contact'>
				<div className="newslettercontent">
					<div className="leftside">
						<form onSubmit={createNewCarSubmitHandler}>
							<img id="image_border" src="image/border.png" alt="border" />
							<div className="contact-form">
								<h1>Post New Car</h1>

								<div className="form-group group-coustume">

									<input id='name' type="text" name={FORM_KEYS.make} className="form-control name-form" placeholder="Manufacturer"
										ref={makeInputRef}
										value={formValues.manufacturer}
										onChange={changeHandler} />
									<input name={FORM_KEYS.model}
										type="text"
										className="form-control name-form"
										placeholder="Model"
										value={formValues.model}
										onChange={changeHandler} />
									<input name={FORM_KEYS.year} type="text" className="form-control name-form" placeholder="Year"
										value={formValues.year}
										onChange={changeHandler} />
									<input name={FORM_KEYS.mileage} type="number" className="form-control name-form" placeholder="Mileage"
										value={formValues.mileage}
										onChange={changeHandler} />
									<input name={FORM_KEYS.location} type="text" className="form-control name-form" placeholder="Location"
										value={formValues.location}
										onChange={changeHandler} />
									<input name={FORM_KEYS.price} type="number" className="form-control price-form" placeholder="Price"
										value={formValues.price}
										onChange={changeHandler} />
									<input name={FORM_KEYS.image} type="img" className="form-control img-form" placeholder="Add your picture"
										value={formValues.image}
										onChange={changeHandler} />
									<textarea name={FORM_KEYS.text} rows="4" cols="50" className="message-form" placeholder="Description-Tell us a bit about your car e.g. color, condition, previous owners"
										value={formValues.text}
										onChange={changeHandler} />
									<button onClick={createNewCarSubmitHandler} type="button" className="btn btn-default btn-submit">Post Car</button>
								</div>

							</div>
						</form>
					</div>

				</div>


			</div>
		</div>)

}