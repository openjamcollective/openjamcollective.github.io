import React from 'react';
import {peoplelist} from '../lib/data/People';
import PersonCard from '../components/about/PersonCard';

const About:React.FC =() =>{
    return(
        <header className="App-header">
        <h4><i>Organizers / Co-Founders</i></h4>
        <div className="container pagedisplay content-sec">
            <div className="row">
                    {peoplelist.map(person=>
                    <div className="col-md-4">
                        <PersonCard obj={person}/>
                    </div>
                )}
            </div>
        </div>
      </header>
    )
}
export default About;