/* eslint-disable no-unused-vars */
// import { useContext, useEffect, useReducer, useRef, useState, useMemo } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import * as carService from '../../services/carServices';
// import * as messageService from '../../services/messageServices';
// import styles from '../carDetails/CarDetails.module.css';
// import AuthContext from "../../context/authContext";

import Message from "./Message";
import PostMessage from "./PostMessage";

// const FORM_KEYS = {

//     text: 'text',
//     name: 'name'

// }

// const formInitialState = {

//     [FORM_KEYS.text]: '',
//     [FORM_KEYS.name]: '',

// }



// const reduser = (state, action) => {
//     switch (action?.type) {
//         case "GET_ALL_MESSAGES":
//             return [...action.messages];
//             case 'ADD_MESSAGE':
//                 return [...state, action.message];

//         default:
//             return state;
//     }
// }

// export default function CarDetails() {
//     const { userId, isAuthenticated, username: authUsername } = useContext(AuthContext)
//     console.log(authUsername);
//     const [car, setCar] = useState({});
//     const { carId, username } = useParams();
//     const makeInputRef = useRef();
//     const navigate = useNavigate();
//     const [messages, dispatch] = useReducer(reduser, []);

//     const handleDMessages = (messages) => {

//         dispatch({
//             type: 'ADD_MESSAGE',
//             message: newMessage,
//         });
//         return messages;
//       };
//     useEffect(() => {
//          carService.getOne(carId)
//             .then((result) => { setCar(result); });

//     }, [carId]);


//        useEffect(() => {
//         messageService.getAll(carId)
//             .then((result) => {
//                 dispatch({
//                     type: 'GET_ALL_MESSAGES',
//                     messages: result,
//                 })
//             })

//     }, [carId,]);


//     const deleteBtnClickHandler = async () => {
//         const hasConfirmed = confirm(`Are you sure you want to delete ${car.model}`);

//         if (hasConfirmed) {
//             await carService.remove(carId)
//             navigate('/catalog')
//         }
//     }



//     return (

//         <div >
//             <div className={styles.details}>
//                 <div className="feturedsection" >
//                     <h1 className="text-center"><span className="bdots">&bull;</span>C A R <span className="carstxt">  D E T A I L S</span>&bull;</h1>

//                     <div className="newslettercontent" style={{
//                        display:'flex',

//                     }} >
//                         <div className="leftside" >
//                             <div className="row costumrow" style={{

//                             }}>
//                                 <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img2colon">
//                                     <img src={car.image} alt="imageUrl" />
//                                 </div>
//                                 <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon ">
//                                     <div className="featurecontant">
//                                         <h2>{car.manufacturer}</h2>
//                                         <h1>{car.model}</h1>
//                                         <p>Year :{car.year}</p>
//                                         <p>Mileage:{car.mileage}</p>
//                                         <p>Description: {car.text}</p>
//                                         <h2>Price:{car.price} &euro;</h2>

//                                         {userId && userId === car._ownerId && (
//                                             <div className="edit">
//                                                 <button id="btnRM2" 
//                                                 >
//                                                     <Link to={`/catalog/${carId}/edit`}> EDIT </Link>
//                                                 </button>
//                                                 <button  id="btnRM2" onClick={deleteBtnClickHandler} >DELETE</button>
//                                             </div>
//                                         )}


//                                         <button id="btnRM2"><Link to={'/catalog'}>BACK TO CATALOG</Link></button>


//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="rightside" >
//                             <div className="leftside">
//                                <PostMessage />
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//                 <div className="feturedsection">
//                     <h1 className="text-center"><span className="bdots">&bull;</span>M E S S A G E S<span style={{ paddingLeft: '40px' }} className="bdots">&bull;</span><br /></h1>

//                     {messages.map((message) => (

//                         < Message key={message._id} {...message} />
//                     ))}

//                     {messages.length === 0 && (
//                         <h1 className="text-center"><span className="bdots">&bull;</span>N O    M E S S A G E S  Y E T<span className="bdots">&bull; </span><br /></h1>

//                     )}

//                 </div>
//             </div>


//         </div>



//     )
// }



/* eslint-disable no-unused-vars */
import { useContext, useEffect, useReducer, useRef, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as carService from '../../services/carServices'
import * as messageService from '../../services/messageServices'
import styles from '../carDetails/CarDetails.module.css'
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForm";


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
    const { userId, isAuthenticated } = useContext(AuthContext);
    const [car, setCar] = useState({});
    const { carId, username } = useParams();
    // const [messages, setMessages] = useState([]);
    const [messages, dispatch] = useReducer(reduser, [])
    const makeInputRef = useRef();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(formInitialState);
    const [renderParent, setRenderParent] = useState(false);

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
        const data = values;
        try {
            const newMessage = await messageService.create(carId, data.text);

            newMessage.owner = { username };

            dispatch({
                type: 'ADD_MESSAGE',
                message: newMessage,
            })

            resetFormHandler();
            navigate(`/catalog/${carId}`)

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

    const { values, onChange, onSubmit } = useForm(postMesageSubmitHandler, formInitialState)

    return (

        <div className={styles.details}>
            <>
                <div className="feturedsection">
                    <h1 className="text-center"><span className="bdots">&bull;</span><span className="carstxt">C A R</span><span className="carstxt">D E T A I L S</span><span className="bdots">&bull;</span></h1>

                    <div className={styles.newslettercontent} >
                        <div className="leftside" style={{

                            // position: 'absolute',
                            // width: '50%',
                            // minHeight: '20em'

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
                                            <div style={{
                                                display: 'flex',
                                                // marginBottom: '1em' 
                                            }}>
                                                <button id="btnRM2">
                                                    <Link to={`/catalog/${carId}/edit`}> EDIT </Link>
                                                </button>
                                                <button id="btnRM2" onClick={deleteBtnClickHandler} >DELETE</button>
                                            </div>
                                        )}


                                        <button id="btnRM2"><Link to={'/catalog'}>BACK TO CATALOG</Link></button>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightside}>
                            <form id="message" onSubmit={changeHandler}>
                                <h1 style={{
                                    paddingTop: '3em',
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
                                    <div style={{ padding: '7em 19em ', }} className="form-group group-coustume">
                                        <textarea style={{
                                            padding: '1em 5em  1em 5em ',
                                            textAlign: 'center',
                                            marginLeft: '3em',
                                        }} name={FORM_KEYS.text} rows="4" cols="50" className="message-form" placeholder="Write a message..."
                                            ref={makeInputRef}
                                            value={values}
                                            onChange={onChange} />
                                        {isAuthenticated && <button
                                            id="newmessage"
                                            onClick={onSubmit}
                                            type="button"
                                            className="btn btn-default btn-submit"
                                        >Post Message</button>}
                                        {!isAuthenticated && <p style={{
                                            marginLeft: '5em',
                                            display:'inline',
                                            textAlign:'center'
                                        }}
                                        >Do not post messages if you is not our member.<br/>
                                        Plese <Link to='/login'>Login</Link> or <Link to='/register'>Register</Link> </p>}
                                             </div>

                                </div>
                            </form>
                            {/* <div className="leftside">
                              
                                 <PostMessage {...setRenderParent}/>
                            </div> */}
                        </div>

                    </div>
                </div>



                <div className="feturedsection">
                    <h1 className="text-center"><span className="bdots">&bull;</span>M E S S A G E S<span style={{ paddingLeft: '40px' }} className="bdots">&bull;</span><br /></h1>

                    {messages.map((message) => (

                        < Message key={message._id} {...message} />
                    ))}

                    {messages.length === 0 && (
                        <h1 className="text-center"><span className="bdots">&bull;</span>N O    M E S S A G E S  Y E T<span className="bdots">&bull; </span><br /></h1>

                    )}

                </div>

            </>


        </div>



    )
}