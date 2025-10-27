import React, {useEffect} from 'react';
import iglogo from '../lib/images/ig-white.png';
import email from '../lib/images/email-white.png';
import botb from '../lib/images/BOTB_Jam.jpg';
import discord_logo from '../lib/images/icons8-discord-100.png';
const Contact:React.FC =() =>{
      useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallax = document.querySelector('.parallax') as HTMLElement;
      if (parallax) {
        parallax.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return(
        <header className="App-header">
            <h4>
            <i>Contact us</i>
        </h4>
      {/* <div
        className="parallax"
        style={{
          backgroundImage: `url(${botb})`,
        }}
      ></div> */}
        
            {contactInfo()}
        <img className='contact-image' src={botb}></img>    
        </header> 
    )
}

const contactInfo = () => {
    return <div className="container content-sec">
        
        <div className='logo-info'>
            <a>
                <img className="logo-image" src={email}/>
            </a>
            <p>openjamcollective@gmail.com</p>
        </div>
        <div className='logo-info down-bad'>
            <a href='https://www.instagram.com/openjamcollective/'>
                <img className="ig-logo" src={iglogo}/>
            </a>
            <p>@openjamcollective</p>
        </div>
        <div className='session down-bad'>
            <p>How to get involved in the popping scene:</p>
            <p>There are weekly dance sessions at Christie Pits</p>
            <p>Wednesdays and Fridays 7-9pm</p>
            <p>Follow our ig as we post stories day of for sessions</p>
        </div>
    </div>
}
export default Contact;