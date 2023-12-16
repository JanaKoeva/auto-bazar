
export default function Page404() {


    return (
        <div className='allcontain' style={
            {
                minHeight: '100vh',

            }
        }>
            <div className="newslettercontent"style={{
                            
                            paddingTop:"5em"
                        }}>
                <div className="leftside">
                    <img id="image_border" src="image/border.png" alt="border" />
                    <div className="contact-form">

                        <div className="form-group group-coustume" style={{
                            position:"relative",
                            justifyContent:"center",
                            paddingTop:"30em",
                            paddingLeft:'15em',
                        }}>
                            <h1>404</h1>
                            <h2><span>PAGE NOT FOUND</span></h2>
                        </div>
                    </div>
                </div>
                <div className="google-maps" >
                    <div className="rightside"style={{
                            
                            paddingTop:"10em"
                        }}>
                        <img className="newsimage" src="https://img.freepik.com/free-vector/404-error-background-with-car-wheel-flat-style_23-2147761283.jpg?w=2000" alt="newsletter" />

                    </div>

                </div>
            </div>

        </div>
    )
}
