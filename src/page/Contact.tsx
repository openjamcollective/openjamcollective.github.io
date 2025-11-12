import React, {useEffect} from 'react';
import iglogo from '../lib/images/ig-white.png';
import email from '../lib/images/email-white.png';
import botb from '../lib/images/BOTB_Jam.jpg';
import discord_logo from '../lib/images/icons8-discord-100.png';
import Carousel from '../components/carousel/Carousel';
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
        <header className="App-header contact-page">
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
        {/* <img className='contact-image' src={botb}></img>   */}
        <Carousel/>  
        </header> 
    )
}

const contactInfo = () => {
    return <div className="container content-sec contact-info">
        <div className='session down-bad'>
            <p>Message us to join our Facebook or Instagram group chat and learn about weekly popping sessions across the city!</p>
        </div>
        <div className='grid-container2'>
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
        </div>
        
        
    </div>
}
export default Contact;