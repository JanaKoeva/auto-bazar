import { useContext } from "react"
import AuthContext from "../../context/authContext"
import useForm from "../../hooks/useForm"
import style from '../register/RegisterPage.module.css';


const RegisterFormKeys={
    Name:'username',
    Email:'email',
    Password:'password',
    ConfirmPassword:'rePassword'
}

export default function RegisterPage(){
    const {registerSubmitHandler}=useContext(AuthContext)
    const {formValues ,onChange, onSubmit}=useForm(registerSubmitHandler,{
        [RegisterFormKeys.Name]:'',
        [RegisterFormKeys.Email]:'',
        [RegisterFormKeys.Password]:'',
        [RegisterFormKeys.ConfirmPassword]:'',

    })
    
    return(
     
   
        <div className= {style.allcontain}>
            <div className="newslettercontent">
                <div className="leftside">
                    <img id="image_border" src="image/border.png" alt="border" />
                    <form onSubmit={onSubmit}>
                    <div className="contact-form">
                        <h1  style={{paddingTop: "4em",paddingLeft:'0em'}}
                        >Register</h1>
                        <div className="form-group group-coustume" 
                        style={{paddingTop: "8em",paddingLeft:'10em'}
                        }>
                            <input 
                            name={RegisterFormKeys.Name}
                            value={formValues[RegisterFormKeys.Name]} 
                            onChange={onChange} 
                            type="text" 
                            className="form-control name-form" 
                            placeholder="Name"
                             />
                            <input 
                            name={RegisterFormKeys.Email}
                            value={formValues[RegisterFormKeys.Email]} 
                            onChange={onChange} 
                            type="text" 
                            className="form-control email-form" 
                            placeholder="E-mail" 
                            />
                            <input 
                            name={RegisterFormKeys.Password}
                            value={formValues[RegisterFormKeys.Password]} 
                            onChange={onChange} 
                            type="password" 
                            className="form-control subject-form" 
                            placeholder="Password" 
                            />
                            <input 
                            name={RegisterFormKeys.ConfirmPassword}
                            value={formValues[RegisterFormKeys.ConfirmPassword]} 
                            onChange={onChange} 
                            type="password" 
                            className="form-control subject-form" 
                            placeholder="Confirm Password" />
                            
                            
                            <button type="submit" className="btn btn-default btn-submit">Register</button>
                            <br />
                            <br />
                            <br />
                            <p>Do you have an account? <a href="/login">Login</a></p>

                        </div>
                    </div>
                    </form>
                </div>
                <div className="google-maps">
                <div className="rightside">
                <img className="newsimage" src="image/newsletter.jpg" alt="newsletter"/>
               
            </div>
                    

                </div>
            </div>

        </div>

    )
}