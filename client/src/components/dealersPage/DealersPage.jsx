import { useState, useEffect } from "react"
import * as carService from '../../services/carServices'

export default function DealersPage() {
    const [dealers, setDealers]=useState({});

    useEffect(() => {
        carService.getAllCarsWithOwners()
        .then(result => setDealers(result));
}, []);


    
    return (
        <div className='details'>
            <>
                <div className="feturedsection">cd cl
                    <h1 className="text-center"><span className="bdots">&bull;</span>D E A L E R S<span className="carstxt">C A R S</span>&bull;</h1>
                    <div className="feturedsection">
                        <h1 className="text-center"><span className="bdots">&bull;</span>&bull;<span style={{ paddingLeft: '40px' }} className="bdots">&bull;</span><br /></h1>
                        {/* {dealers.map(({ text, _id, owner: { username } }) => (

                            <>
                                <div key={_id} className="row costumrow">
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img2colon">
                                        {/* <img src="" alt="imageUrl" /> */}
                                        {/* <h3>{username}</h3> */}
                                    {/* </div>
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
                            </> */}
                        {/* ))} */} */
                        {dealers.length === 0 && (
                            <h1 className="text-center"><span className="bdots">&bull;</span>N O  D E A L E R S<span className="bdots">&bull; </span><br /></h1>

                        )}

                    </div>
                </div>
            </>

        </div>
    )
}