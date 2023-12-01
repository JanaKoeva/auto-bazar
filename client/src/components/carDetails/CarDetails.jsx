import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as carService from '../../services/carServices'
import * as messageService from '../../services/messageServices'
import styles from '../carDetails/CarDetails.module.css'



const FORM_KEYS = {
    image: 'image',
    text: 'text',
    name: 'name'

}

const formInitialState = {
    [FORM_KEYS.image]: '',
    [FORM_KEYS.text]: '',
    [FORM_KEYS.name]: '',

}


export default function CarDetails() {
    const { carId } = useParams();
    const [car, setCar] = useState({});
    const [messages, setMessages] = useState([]);
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
    const changeHandlerText = (e) => {
        setFormValues(state => ([
            ...state,
            e.target.value
        ]))
    };
    const resetFormHandler = () => {
        setFormValues(formInitialState)
    }
    useEffect(() => {
        carService.getOne(carId)
            .then(setCar);

        messageService.getAll(carId)
            .then(setMessages)
    }, [carId]);

    const postMesageSubmitHandler = async (e) => {
        e.preventDefault();
        const data = formValues;
        try {
            const newMessage = await messageService.create(carId, data.name, data.text);
            console.log(newMessage);
            setMessages(state => [...state, newMessage])
            navigate(`/catalog/${carId}`)

            resetFormHandler();
        } catch (err) {
            console.log(err);
        }

    }



    return (

        <div className={styles.details}>
            <div className={styles.feturedsection}>
                <h1 className="text-center"><span className="bdots">&bull;</span>F E A T U R E S<span className="carstxt">C A R S</span>&bull;</h1>

                <div className="col-lg-6 costumcol colborder2">
                    <div className="row costumrow">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img2colon">
                            <img src={car.image} alt="imageUrl" />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon ">
                            <div className="featurecontant">
                                <h1>{car.model}</h1>
                                <h2>Manifacture: {car.manifactur}</h2>
                                <p>Year :{car.year}</p>
                                <p>Mileage:{car.mileage}</p>
                                <p>{car.text}</p>
                                <h2>Price:{car.price} &euro;</h2>
                                <button id="btnRM2"><Link to={'/catalog'}>BACK TO CATALOG</Link></button>

                            </div>
                        </div>
                    </div>
                    <div className="row costumrow">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img2colon">
                            <div className='contact'>
                                <div className="newslettercontent">
                                    <div className="leftside">
                                        <form onSubmit={postMesageSubmitHandler}>
                                            <img id="image_border" src="image/border.png" alt="border" />
                                            <div className="contact-form">
                                                <img src="../../image/border.png" alt="border" />
                                                <h1>Post New Message</h1>

                                                <div className="form-group group-coustume">
                                                    <input type="text" onChange={changeHandler} name={FORM_KEYS.name} value={formValues.name} placeholder="Username" />
                                                    <textarea name={FORM_KEYS.text} rows="4" cols="50" className="message-form" placeholder="Write a message..."
                                                        ref={makeInputRef}
                                                        value={formValues.text}
                                                        onChange={changeHandler} />
                                                    <button onClick={postMesageSubmitHandler} type="button" className="btn btn-default btn-submit">Post Message</button>
                                                </div>

                                            </div>
                                        </form>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon ">
                            <div className={styles.allcontain}>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
           
            
                <div  className="feturedsection">
                    <h1 className="text-center"><span className="bdots">&bull;</span>M E S S A G E S<span className="bdots">&bull; </span><br /></h1>
                    {messages.map(({carId, text, userName, _id}) => (
                    <>
                        <div key={_id} className="row costumrow">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img2colon">
                                <img src="" alt="imageUrl" />
                                <h3>{userName}</h3>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon ">
                                <div className="featurecontant">

                                    <p>{text}</p>


                                </div>
                            </div>
                        </div>
                    </>
))}
                    {messages.length === 0 && (
                        <h1 className="text-center"><span className="bdots">&bull;</span>N O  M E S S A G E S  Y E T<span className="bdots">&bull; </span><br /></h1>

                    )}  
 
                </div>
                
           
        </div>



    )
}