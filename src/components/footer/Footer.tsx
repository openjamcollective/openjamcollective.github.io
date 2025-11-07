import React, {useEffect} from 'react';
import iglogo from '../../lib/images/instagram.png';
import email from '../../lib/images/email.png';
import ojc from '../../lib/images/OJC_vs jar black.png';
import "./Footer.css"
const Footer:React.FC =() =>{
    return(
        <div className="footer">
            <div className='logo-info'>
                    <img className="footer-ojc-logo" src={ojc}/>
            </div>
        <div className='footer-right'>
            <div className='logo-info'>
                <a>
                    <img className="footer-ig-logo" src={email}/>
                </a>
                <p>openjamcollective@gmail.com</p>
            </div>
            <div className='logo-info'>
                <a href='https://www.instagram.com/openjamcollective/'>
                    <img className="footer-ig-logo" src={iglogo}/>
                </a>
                <p>@openjamcollective</p>
            </div>
        </div>
        
        </div> 
    )
}

const contactInfo = () => {
    return <div className="container content-sec">
   
    </div>
}
export default Footer;