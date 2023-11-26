
export default function RegisterPage(){
    return(
     
   
        <div className= 'allcontain' >
            <div className="newslettercontent">
                <div className="leftside">
                    <img id="image_border" src="image/border.png" alt="border" />
                    <div className="contact-form">
                        <h1>Register</h1>
                        <div className="form-group group-coustume">
                        <input type="text" className="form-control name-form" placeholder="Name" />
                            <input type="text" className="form-control email-form" placeholder="E-mail" />
                            <input type="password" className="form-control subject-form" placeholder="Password" />
                            <input type="password" className="form-control subject-form" placeholder="RePassword" />
                            
                            
                            <button type="submit" className="btn btn-default btn-submit">Register</button>
                            <br />
                            <br />
                            <br />
                            <p>Do you have an account? <a href="/login">Login</a></p>

                        </div>
                    </div>
                </div>
                <div className="google-maps">
                    

                </div>
            </div>

        </div>

    )
}