import style from '../login/LoginPage.module.css';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';

const LoginFormKyes = {
    EMAIL: 'email',
    PASSWORD: 'password',
}

export default function LoginPage() {
    const { loginSubmitHandler } = useContext(AuthContext)
    const { formValues, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKyes.EMAIL]: '',
        [LoginFormKyes.PASSWORD]: '',
    })
    return (


        <div className={style.allcontain}>
            <div className="newslettercontent">
                <div className="leftside">
                    <img id="image_border" src="image/border.png" alt="border" />
                    <div className="contact-form">
                        <h1>Login</h1>
                        <div className="form-group group-coustume">
                            <form onSubmit={onSubmit}>
                                <input
                                    name={LoginFormKyes.EMAIL}
                                    value={formValues[LoginFormKyes.EMAIL]}
                                    onChange={onChange}
                                    type="email"
                                    className="form-control email-form"
                                    placeholder="E-mail"
                                />
                                <input
                                    name={LoginFormKyes.PASSWORD}
                                    value={formValues[LoginFormKyes.PASSWORD]}
                                    onChange={onChange}
                                    type="password"
                                    className="form-control subject-form"
                                    placeholder="Password"
                                />

                                <button type="submit" className="btn btn-default btn-submit">Login</button>
                                <br />
                                <br />
                                <br />
                            </form>
                            <p>Don’t have an account? <a href="/register">Register</a></p>

                        </div>
                    </div>
                </div>
                <div className="google-maps">
                    <div className="rightside">
                        <img className="newsimage" src="image/newsletter.jpg" alt="newsletter" />

                    </div>

                </div>
            </div>

        </div>

    )
}