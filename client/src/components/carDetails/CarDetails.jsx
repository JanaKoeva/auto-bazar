import { useContext, useEffect, useReducer, useRef, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as carService from '../../services/carServices'
import * as messageService from '../../services/messageServices'
import styles from '../carDetails/CarDetails.module.css'
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForm";
import Path from "../../paths";
import pathToUrl from "../../utils/pathUtils";




const FORM_KEYS = {
    
    text: 'text',
    name: 'name'

}

const formInitialState = {
 
    [FORM_KEYS.text]: '',
    [FORM_KEYS.name]: '',

}

const reduser = (state, action) => {
    switch (action?.type) {
        case "GET_ALL_MESSAGES":
            return [...action.messages];

        case 'ADD_MESSAGE':
            return [...state, action.message];

        default:
            return state;
    }
}

export default function CarDetails() {
    const { userId } = useContext(AuthContext)
    const [car, setCar] = useState({});
    const { carId, username } = useParams();
    // const [messages, setMessages] = useState([]);
    const [messages, dispatch] = useReducer(reduser, [])
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
    // const changeHandlerText = (e) => {
    //     setFormValues(state => ([
    //         ...state,
    //         e.target.value
    //     ]))

    console.log(userId);
    console.log(car._ownerId);


    // };
    const resetFormHandler = () => {
        setFormValues(formInitialState)
    }
    useEffect(() => {
        carService.getOne(carId)
            .then((result) => { setCar(result); });

        messageService.getAll(carId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_MESSAGES',
                    messages: result,
                })
            })
    }, [carId]);


    const postMesageSubmitHandler = async (values) => {
        // e.preventDefault();
        const data = values;
        try {
            const newMessage = await messageService.create(carId, data.text);

            newMessage.owner = { username };

            // setMessages(state => [...state, newMessage]);
            dispatch({
                type: 'ADD_MESSAGE',
                message: newMessage,
            })
            navigate(`/catalog/${carId}`)

            resetFormHandler();
        } catch (err) {
            console.log(err);
        }
    }
    const deleteBtnClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${car.model}`);

        if (hasConfirmed) {
            await carService.remove(carId)
            navigate('/')
        }
    }


    const initialValues = useMemo(() => ({
        messages: ''
    }), []);
    const { values, onChange, onSubmit } = useForm(postMesageSubmitHandler, initialValues)

    return (

        <div className={styles.details}>
            <>
                <div className="feturedsection">
                    <h1 className="text-center"><span className="bdots">&bull;</span>F E A T U R E S<span className="carstxt">C A R S</span>&bull;</h1>

                    <div className="newslettercontent" style={{

                        // position: 'relative',
                        width: '100%',
                        height: '50em',

                    }}>
                        <div className="leftside" style={{

                            // position: 'absolute',
                            width: '50%',
                            minHeight: '20em'

                        }}>
                            <div className="row costumrow">
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img2colon">
                                    <img src={car.image} alt="imageUrl" />
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon ">
                                    <div className="featurecontant">
                                        <h2>{car.manufacturer}</h2>
                                        <h1>{car.model}</h1>
                                        <p>Year :{car.year}</p>
                                        <p>Mileage:{car.mileage}</p>
                                        <p>Description: {car.text}</p>
                                        <h2>Price:{car.price} &euro;</h2>

                                        {userId && userId === car._ownerId && (
                                            <div style={{ display: 'flex', marginBottom: '1em' }}>
                                                <button id="btnRM2">
                                                    <Link  to={`/catalog/${carId}/edit`}> EDIT </Link>
                                                    </button>
                                                <button id="btnRM2" onClick={deleteBtnClickHandler} >DELETE</button>
                                            </div>
                                        )}


                                        <button id="btnRM2"><Link to={'/catalog'}>BACK TO CATALOG</Link></button>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rightside">
                            <div className="leftside">
                                <form id="message" onSubmit={onSubmit}>
                                    <h1 style={{
                                        paddingLeft: '11em',
                                        textAlign: 'center',

                                    }} id="post">Post New Message</h1>
                                    <div className="contact-form">
                                        <img style={{
                                            transform: 'rotate(90deg)',
                                            width: '600px',
                                            height: '500px',
                                            padding: '0em 5em',
                                            margin: '5em 1em'
                                        }} id="border" src="../../image/border.png" alt="border" />
                                        <div style={{ padding: '3em 19em ', }} className="form-group group-coustume">
                                            <textarea style={{
                                                padding: '2em 0  2em 2em ',
                                                textAlign: 'center',
                                                marginLeft: '3em',
                                            }} name={FORM_KEYS.text} rows="4" cols="50" className="message-form" placeholder="Write a message..."
                                                ref={makeInputRef}
                                                value={values}
                                                onChange={onChange} />
                                            <button id="newmessage" onClick={onSubmit} type="button" className="btn btn-default btn-submit">Post Message</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="feturedsection">
                    <h1 className="text-center"><span className="bdots">&bull;</span>M E S S A G E S<span style={{ paddingLeft: '40px' }} className="bdots">&bull;</span><br /></h1>
                    {messages.map(({ text, _id, owner: { username } }) => (

                        <>
                            <div key={_id} className="row costumrow">
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img2colon">
                                    {/* <img src="" alt="imageUrl" /> */}
                                    <h3>{username}</h3>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon ">
                                    <div style={{
                                        width: '100%',
                                        height: '10em',
                                        border: '1px solid #C59E47',
                                        marginTop: '1%',
                                        marginRight: 'auto',
                                        marginLeft: 'auto',
                                    }} className="featurecontant">
                                        <p style={{
                                            boxSizing: 'border-box',
                                            height: '5em',
                                            fontSize: '30px'
                                        }}>{text}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                    {messages.length === 0 && (
                        <h1 className="text-center"><span className="bdots">&bull;</span>N O    M E S S A G E S  Y E T<span className="bdots">&bull; </span><br /></h1>

                    )}

                </div>
            </>


        </div>



    )
}