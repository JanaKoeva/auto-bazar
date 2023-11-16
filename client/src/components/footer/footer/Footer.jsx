export default function Footer (){
    const currentYear= new Date().getFullYear() 
    return(
        <div className="footer">
				<div className="copyright">
				&copy; Copy right {currentYear} | <a href="#">Privacy </a>| <a href="#">Policy</a>
				</div>
				<div className="atisda">
				Designed by Jana Koeva with a help of  &nbsp;<a href="http://www.softuni.bg">SoftUniBG</a> 
				</div>
			</div>
        
    )
}