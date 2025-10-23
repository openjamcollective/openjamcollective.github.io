import React from 'react';
import {orgInfoList} from '../lib/data/Info';
import OrganizationCard from '../components/about/OrganizationCard';
import logo from '../lib/images/OJC_Full.png';
import botb from '../lib/images/BOTB_Clean.jpg';
import './Page.css';
import Instagram from '../components/instagram/Instagram';
const Home:React.FC =() =>{
    return(
        <header className="App-header">
            <div className="row"
                        style={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${botb})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <p className="quote"><i>"For the community, by the community." - Luis Miguel</i></p>
            </div>
            <div className="row">
                <Instagram/>
            </div>
        </header>
    )
}

export default Home;