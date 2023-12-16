import { useContext } from 'react';
import AuthContext from '../../context/authContext'
import { Link } from 'react-router-dom';
// import { useEffect, useRef } from 'react';

// const MyMapComponent = () => {
//     const myCenter = { lat: 41.567197, lng: 14.681526 };
//     const imageBorderRef = useRef(null);
//     const googleMapRef = useRef(null);

//     useEffect(() => {
//         const initialize = () => {
//             const mapProp = {
//                 center: myCenter,
//                 zoom: 16,
//                 mapTypeId: 'roadmap',
//             };

//             const map = new window.google.maps.Map(googleMapRef.current, mapProp);

//             const marker = new window.google.maps.Marker({
//                 position: myCenter,
//             });

//             marker.setMap(map);
//         };

//         const resizeMap = () => {
//             const newHeight = imageBorderRef.current.clientHeight;
//             googleMapRef.current.style.height = `${newHeight || 300}px`;
//         };

//         resizeMap(); // Initial resize

//         window.addEventListener('resize', resizeMap);
//         window.addEventListener('load', () => {
//             resizeMap();
//             initialize();
//         });

//         // Cleanup event listeners on component unmount
//         return () => {
//             window.removeEventListener('resize', resizeMap);
//             window.removeEventListener('load', () => {
//                 resizeMap();
//                 initialize();
//             });
//         };
//     }, [myCenter]);

//     return (
//         <div>
//             {/* Map content */}
//             <div id="image_border" ref={imageBorderRef}></div>
//             <div id="googleMap" ref={googleMapRef}></div>
//         </div>
//     );
// };
export default function ContactPage() {
    const {
        isAuthenticated,
    } = useContext(AuthContext);

    return (
        <div className='allcontain' style={{
            maxWidth: '1000px',
            minHeight: '100vh',
            marginTop: '2em',
        }}>
            <div className="newslettercontent">
                <div className="leftside" >
                    <img style={{
                        maxWidth: '500px',
                        minHeight: '500px',

                    }} id="image_border" src="image/border.png" alt="border" />

                    <div className="contact-form">
                        <h1></h1>
                        <div className="form-group group-coustume" >
                            <h1 style={{
                                paddingTop: '1em',
                                paddingBottom: '2em',
                                paddingLeft: '6em'
                            }}>Contact Us:</h1>
                            <div style={{
                                fontSize: '18px',
                                paddingLeft: '8em'
                            }}>
                                <p> 152,Sveta Troitza Str.,
                                    Stara Zagora</p>
                                <p>Tel : +359 888 888 888</p>
                                <p>Email : autobazar@abv.bg </p>
                            </div>
                            {!isAuthenticated && (<p style={{
                                paddingTop: '5em', paddingLeft: '10em',
                                fontSize: '15px'
                            }}>Become our member <Link to='/register'>Register</Link></p> )}


                        </div>
                    </div>

                </div>

                <div className="rightside">
                    <div className="google-maps" style={{
                        paddingLeft: '0',
                    }} >
                        <img style={{
                            maxWidth: '696px',
                            minHeight: '500px',

                            position: 'relative'
                        }} className="newsimage" src="image/map.png" alt="newsletter" />
                        <div>

                            <div id="image_border" ></div>
                            {/* <img style={{
                                maxWidth: '696px',
                                minHeight: '500px',

                                position: 'relative'
                            }} className="newsimage" src="image/map.png" alt="newsletter" /> */}

                            {/* <div id="googleMap">{<MyMapComponent />}</div> */}
                        </div>


                    </div>


                </div>
            </div>

        </div>

    )
}