/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './styles.css'
import { useState } from "react";

export default function FutureCar({
    // eslint-disable-next-line react/prop-types
    image,
    // eslint-disable-next-line react/prop-types
    model,
    manufacturer,
    // eslint-disable-next-line react/prop-types
    text,
    price,
    // eslint-disable-next-line no-unused-vars
    _id,
}) {

    const firstSentenceRegex = /^[^.!?]+[.!?]/;
    const match = text.match(firstSentenceRegex);
    const [expanded, setExpanded] = useState(false);
    let firstSentence = match ? match[0] : text

    console.log(text);
    console.log(firstSentence);

    const toggleReadMore = () => {
        setExpanded(!expanded);
    };

    return (

        <div >
            <div className="col-lg-6 costumcol colborder1">
                <div className="row costumrow">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img1colon">
                        <img src={image} alt="porsche" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon ">
                        <div className="featurecontant">
                            {!expanded && (
                                <>
                                    <h1>{model}</h1>
                                    <p>&quot;{firstSentence}&quot;</p>
                                    <h2>{price} &euro;</h2>
                                </>
                            )}
                            {expanded && (
                            <>
                            {/* <div id="readmore" style={{minHight:'100%'}}> */}
                                <h1>{model}</h1>
                                <p className='readmore'>&quot;{text}&quot;
                                </p>
                                {/* <button id="btnRL">READ LESS</button> */}
                            {/* </div> */}
                            </>
                        )}
                            <button id={expanded? 'btnRL': 'btnRM'} onClick={toggleReadMore}>
                                {expanded ? 'READ LESS' : 'READ MORE'}
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}