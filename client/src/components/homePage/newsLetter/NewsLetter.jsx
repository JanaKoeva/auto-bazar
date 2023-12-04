export default function NewsLetters() {
    return (

        <div className="newslettercontent" style={{
            
                position: 'relative',
                width: '100%',
                height: '50em',
            
        }}>
            <div className="leftside" style={{
            
            position: 'absolute',
            width: '100%',
            minHeight: '20em'
        
    }}>
                <img src="image/border.png" alt="border" style={{position: 'relative'}}/>
                <h1 id="newsteller" style={{marginTop: '5em'}}>NEWSLETTER</h1>
                <p id="newsteller1" style={{marginTop: '12em'}}>Subscribe to the COLLECTIONCARS mailing list to <br/>
                        receive updates on new arrivals, special offers <br/>
                            and other discount information.
                </p>
            </div>
            <div className="rightside">
                <img className="newsimage" src="image/newsletter.jpg" alt="newsletter"/>
                <input type="text" className="form-control" id="subemail" placeholder="EMAIL"/>
                <button>SUBSCRIBE</button>
            </div>
        </div>


                        )
}