import React from 'react';
import botb from '../lib/images/BOTB_Clean.jpg';
import Collaborators from '../components/about/Collaborators';
import './Page.css';
const Home:React.FC =() =>{
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