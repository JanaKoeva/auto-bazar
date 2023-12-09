import { useEffect } from 'react';

export default function ContactPage() {

    const MyMapComponent = () => {
        const myCenter = { lat: 41.567197, lng: 14.681526 };

        useEffect(() => {
            const initialize = () => {
                const mapProp = {
                    center: myCenter,
                    zoom: 16,
                    mapTypeId: 'roadmap',
                };

                const map = new window.google.maps.Map(document.getElementById('googleMap'), mapProp);

                const marker = new window.google.maps.Marker({
                    position: myCenter,
                });

                marker.setMap(map);
            };

            const resizeMap = () => {
                const newHeight = document.getElementById('image_border').clientHeight;
                document.getElementById('googleMap').style.height = `${newHeight}px`;
            };

            resizeMap(); // Initial resize

            window.addEventListener('resize', resizeMap);
            window.addEventListener('load', () => {
                resizeMap();
                initialize();
            });

            // Cleanup event listeners on component unmount
            return () => {
                window.removeEventListener('resize', resizeMap);
                window.removeEventListener('load', () => {
                    resizeMap();
                    initialize();
                });
            };
        }, [myCenter]);
    }
        return (
            <div className='allcontain' style={{
                minHeight:'100vh',
                paddingTop:'20em',
            }}>
                <div className="newslettercontent">
                    <div className="leftside">
                        <img id="image_border" src="image/border.png" alt="border" />

                        <div className="contact-form">
                            <h1></h1>
                            <div className="form-group group-coustume" >
                                <h1 style={{
                                    paddingTop:'3em',
                                    paddingBottom:'2em'
                                }}>Contact Us:</h1>
                                <div style={{
                                    fontSize:'18px'
                                }}>
                                <p> 152,Sveta Troitza Str.,Stara Zagora</p>
                                <p>Tel : +359 0888 888 888</p>
                                <p>Email : autobazar@abv.bg </p>
                                </div>

                                <p style={{paddingTop:'5em',
                                fontSize:'15px'
                                }}>Become our member <a href="/login">Login</a></p>

                            </div>
                        </div>

                    </div>
                    <div className="google-maps">
                        <div className="rightside">
                            <div>

                                <div id="image_border"></div>
                                <img className="newsimage" src="image/newsletter.jpg" alt="newsletter" />

                                <div id="googleMap">{<MyMapComponent/>}</div>
                            </div>

                           
                        </div>


                    </div>
                </div>

            </div>

        )
    }