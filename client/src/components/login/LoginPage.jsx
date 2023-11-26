import style from '../login/LoginPage.module.css';

export default function LoginPage(){
    return(
     
   
        <div className={style.allcontain}>
            <div className="newslettercontent">
                <div className="leftside">
                    <img id="image_border" src="image/border.png" alt="border" />
                    <div className="contact-form">
                        <h1>Login</h1>
                        <div className="form-group group-coustume">
                          
                            <input type="text" className="form-control email-form" placeholder="E-mail" />
                            <input type="password" className="form-control subject-form" placeholder="Password" />
                            
                            <button type="submit" className="btn btn-default btn-submit">Login</button>
                            <br />
                            <br />
                            <br />
                            <p>Don’t have an account? <a href="/register">Register</a></p>

                        </div>
                    </div>
                </div>
                <div className="google-maps">
                    

                </div>
            </div>

        </div>

    )
}