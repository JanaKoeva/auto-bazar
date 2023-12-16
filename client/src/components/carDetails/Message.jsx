import { useContext} from "react";
import AuthContext from "../../context/authContext";



export default function Message( message){
    const { username: authUsername } = useContext(AuthContext)
   
    return(
    
        <>
        <div key={message._id} className="row costumrow" style={{ marginLeft: '10em'}}>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img2colon">
                {/* <img src="" alt="imageUrl" /> */}
                <h3 style={{ 
                    fontSize: '15px', paddingTop: '3em',paddingLeft: '5em',
                    }}>{message.owner.username|| authUsername}</h3>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon ">
                <div className="featurecontant1">
                    <p style={{ 
                        fontSize: '15px', paddingTop: '2em', textAlign: 'center' 
                        }}>{message.text}</p>
                </div>
            </div>
        </div>
    </>
    )
}