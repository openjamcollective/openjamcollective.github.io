import React, {useEffect} from 'react';
import botb from '../lib/images/BOTB_Clean.jpg';
import Collaborators from '../components/about/Collaborators';
import './Page.css';
const Home:React.FC =() =>{
          useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const parallax = document.querySelector('.home-section') as HTMLElement;
          if (parallax) {
            parallax.style.backgroundPositionY = `${scrollY * 0.2}px`;
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    return(
        <header className="App-header">
            <div className="row home-section"
                style={{
                backgroundImage: `url(${botb})`,
            }}>
                <p className="quote"><i>"For the community, by the community." - Luis Miguel</i></p>
            </div>
            <div className="row">
                <Collaborators/>
            </div>
        </header>
    )
}

export default Home;