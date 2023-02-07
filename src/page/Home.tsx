import React from 'react';
import {orgInfoList} from '../lib/data/Info';
import OrganizationCard from '../components/about/OrganizationCard';
import logo from '../lib/images/OJC_Full.png';
import botb from '../lib/images/BOTB_Clean.jpg';
import './Page.css';
const Home:React.FC =() =>{
    return(
        <header className="App-header image-container">
            <div className="row">
                <p><i>"For the community, by the community" - Luis Miguel</i></p>
            </div>
            <img className="home-image" src={botb}/>
        </header>
    )
}

export default Home;