import React from 'react';
import iglogo from '../lib/images/ig-white.png';
import email from '../lib/images/email-white.png';
import botb from '../lib/images/BOTB_Jam.jpg';
import discord_logo from '../lib/images/icons8-discord-100.png';
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
        <div className='logo-info'>
            <a href='https://www.instagram.com/openjamcollective/'>
                <img className="ig-logo" src={iglogo}/>
            </a>
            <p>@openjamcollective</p>
        </div>
        <div className='logo-info down-bad'>
            <a href='https://discord.gg/ymebyDZ9H5'>
                <img className="med-logo" src={discord_logo}/>
            </a>
            <p>TO Street Dance</p>
        </div>
    </div>
}
export default Contact;