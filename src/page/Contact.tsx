import React from 'react';
import iglogo from '../lib/images/ig-white.png';
import email from '../lib/images/email-white.png';
import botb from '../lib/images/BOTB_Jam.jpg';
const Contact:React.FC =() =>{
    return(
        <header className="App-header">
            {contactInfo()}
            <img className="contact-image" src={botb}/>  
        </header> 
    )
}

const contactInfo = () => {
    return <div>
        <h4 className='no-margins'><i>Contact us</i></h4>
        <div className='logo-info'>
            <a>
                <img className="logo-image" src={email}/>
            </a>
            <p>openjamcollective@gmail.com</p>
        </div>
        <div className='logo-info down-bad'>
            <a href='https://www.instagram.com/oatmilkandjam/'>
                <img className="ig-logo" src={iglogo}/>
            </a>
            <p>@openjamcollective</p>
        </div>
    </div>
}
export default Contact;