import styles from '../carEdit/stylesCarEdit.css'
import * as carService from '../../services/carServices';
import { useEffect, useState, } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// import useForm from '../../hooks/useForm'

const FORM_KEYS = {
    make: "manufacturer",
    model: 'model',
    year: 'year',
    mileage: 'mileage',
    location: 'location',
    price: 'price',
    image: 'image',
    text: 'text',

};
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
export default function EditCar() {

    const navigate = useNavigate();
    const { carId } = useParams();
    const [editedCar, setEditedCar] = useState(formInitialState)
    useEffect(() => {
        carService.getOne(carId)
            .then(result =>
                setEditedCar(result))
    }, [carId]);
    // const formAfretFirstRenderState =useMemo(((editedCar)=>{(editedCar)},[]));
    // console.log(formAfretFirstRenderState);
    // const [editedCar, setEditedCar] = useState(editCar);

    const editCarSubmitHandler = async (e) => {
        e.preventDefault();
        let data={};
        

        data= Object.fromEntries(new FormData(e.currentTarget));

        console.log(data);
        try {
            await carService.edit(carId, data);
            navigate(`/catalog/${carId}`)

        } catch (err) {
            console.log(err);
        }

    }
    const changeHandler = (e) => {
        setEditedCar(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };


    // const { formValues, onChange, onSubmit } = useForm(editCarSubmitHandler, car);
    // console.log(formValues);

    return (
        <div className='allcontain'>
            <div className={styles.contact}>
                <div style={
                    {marginTop:0,
                }} className="newslettercontent">
                    <div className="leftside">
                        <form onSubmit={editCarSubmitHandler}>
                            <h1 style={{
                                paddingLeft:'5em',
                            }}>Edit my Car</h1>
                            <img style={{
                                minHeight:'550px',
                                zIndex:'10000'
                            }} className="image" id="image_border" src="../../image/border.png" alt="border" />
                            <div className="contact-form">

                                <div className="form-group group-coustume">

                                    <input
                                        id='name'
                                        type="text"
                                        name={FORM_KEYS.make}
                                        className="form-control name-form"
                                        placeholder="Manufacturer"
                                        value={editedCar.manufacturer}
                                        onChange={changeHandler} />
                                    <input
                                        name={FORM_KEYS.model}
                                        type="text"
                                        className="form-control name-form"
                                        placeholder="Model"
                                        value={editedCar.model}
                                        onChange={changeHandler} />
                                    <input
                                        name={FORM_KEYS.year} type="text" className="form-control name-form" placeholder="Year"
                                        value={editedCar.year}
                                        onChange={changeHandler} />
                                    <input
                                        name={FORM_KEYS.mileage} type="number" className="form-control name-form" placeholder="Mileage"
                                        value={editedCar.mileage}
                                        onChange={changeHandler} />
                                    <input
                                        name={FORM_KEYS.location} type="text" className="form-control name-form" placeholder="Location"
                                        value={editedCar.location}
                                        onChange={changeHandler} />
                                    <input
                                        name={FORM_KEYS.price} type="number" className="form-control price-form" placeholder="Price"
                                        value={editedCar.price}
                                        onChange={changeHandler} />
                                    <input
                                        name={FORM_KEYS.image} type="img" className="form-control img-form" placeholder="Add your picture"
                                        value={editedCar.image}
                                        onChange={changeHandler} />
                                    <textarea
                                        name={FORM_KEYS.text} rows="4" cols="50" className="message-form" placeholder="Description-Tell us a bit about your car e.g. color, condition, previous owners"
                                        value={editedCar.text}
                                        onChange={changeHandler} />
                                    <button style={{
        background: 'none',
        backgroundColor: 'none',
        border: '2px solid #C59E47',
        fontFamily: 'BebasNeue Regular',
        marginLeft:' 60px',
        fontSize: '16.99px',
        color:' #313943',
        marginTop: '0px',
        paddingLeft: '19px',
        paddingRight:' 19px',
        paddingTop: '-2px',
        paddingBottom: '-2px',
    
    }} type="submit"  className="btn btn-default btn-submit">Edit Car</button>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className="google-maps">
                        <div className="rightside">
                            {/* {FORM_KEYS.image != "" &&
						(<img className="newsimage" src={formValues.image} alt="newsletter" />)}
						{FORM_KEYS.image == null && */}
                            <img style={{
                                marginTop:'10em',
                                boxSizing:'border-box',
                                width:'500px',
                                height:'500px',
                                zIndex:'1000'
                            }} className="newsimage" src={editedCar.image} alt="newsletter" />
                            {/* } */}


                        </div>
                    </div>

                </div>


            </div>
        </div>)

}