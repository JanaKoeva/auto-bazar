import styles from '../header/Header.module.css'
import { Link } from "react-router-dom"
export default function Header(){
    return(
        <div className={styles.allcontain}>
        <div className="header">
                <ul className="socialicon">
                    <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-pinterest"></i></Link></li>
                </ul>
                <ul className="givusacall">
                    <li>Give us a call : +359 888 888 888 </li>
                </ul>
                <ul className="logreg">
                    <li><Link to="/login">Login </Link> </li>
                    <li><Link to="/register"><span className="register">Register</span></Link></li>
                </ul>
                <ul className="logout">
                    <li><Link to="dealer/id"><span className="register">Hello NAME</span></Link> </li>
                    <li><Link to="logout"><span className="register">Logout</span></Link></li>
                </ul>
        </div>
        
        <nav className="topnavbar navbar-default topnav">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed toggle-costume" data-toggle="collapse" data-target="#upmenu" aria-expanded="false">
                        <span className="sr-only"> Toggle navigaion</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand logo" to="/"><img 
                    // className={styles.logoBorder} 
                        src="image/logo2.png" alt="logo"/></Link>
                </div>	 
            </div>
            <div className="collapse navbar-collapse" id="upmenu">
                <ul className="nav navbar-nav" id="navbarontop">
                    <li className="active"><Link to="/">HOME</Link> </li>
                    <li className="dropdown">
                        <Link to="/catalog" 	data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CATALOG</Link>
                        
                    </li>
                    <li className="dropdown">
                            <Link to="#"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">DEALERS</Link>
                            
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
     
                    </li>
                    <li className={styles.button}><span className="postnewcar " ><Link to="/create" >POST NEW CAR</Link></span></li>
                </ul>
            </div>
        </nav>
    </div>
    )
    
    }