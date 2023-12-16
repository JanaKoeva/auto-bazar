/* eslint-disable no-unused-vars */
import { useContext, useEffect, useReducer, useRef, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as carService from '../../services/carServices'
import * as messageService from '../../services/messageServices'
import styles from '../carDetails/PostMessage.module.css'
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForm";
import Message from "./Message";


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
        case 'ADD_MESSAGE':
            return [...state, action.message];
        case "GET_ALL_MESSAGES":
            return [...action.messages];

        default:
            return state;
    }
}

export default function PostMessage(setRenderParent) {
    const { userId, isAuthenticated, username: authUsername } = useContext(AuthContext)
    console.log(authUsername);
    const [car, setCar] = useState({});
    const { carId, username } = useParams();
    const [messages, dispatch] = useReducer(reduser, [])
    const makeInputRef = useRef();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(formInitialState);


    useEffect(() => {
        makeInputRef.current.focus();

    }, []);


    const resetFormHandler = () => {
        setFormValues(formInitialState);

    }

    const postMesageSubmitHandler = async (values) => {

        const data = values;
        console.log(data);
        try {
            const newMessage = await messageService.create(carId, data.text);
            console.log(data);
            
            newMessage.owner = authUsername;
        
            navigate(`/catalog/${carId}`)
            resetFormHandler();


        } catch (err) {
            console.log(err);
        }
    }


    // const initialValues = useMemo(() => ({
    //     messages: ''
    // }), []);
    const changeMessagesSubmitHandler=(messages)=>{
return messages
    }
    const { values, onChange, onSubmit } = useForm(postMesageSubmitHandler, formInitialState,)
    console.log(values);
    return (

        <form id="message" onSubmit={() => {
            onSubmit();
            // Set renderParent to true when the button is clicked
            setRenderParent(true);
        }} className={styles.details} >
            <h1 id="post1" >Post New Message</h1>
            <div className={styles.contactForm}>
                <img id="border" src="../../image/border.png" alt="border" />
                <div className="form-group group-coustume">
                    <textarea
                        name={FORM_KEYS.text} rows="4" cols="50" className="message-form" placeholder="Write a message..."
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
                        marginLeft:'30em'
                    }}

                    >Do not post messages if you is not our member.<br/>
                    Plese <Link to='/login'>Login</Link> or <Link to='/register'>Register</Link> </p>}
                </div>

            </div>
        </form>

    )
}
