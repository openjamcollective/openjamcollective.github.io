import React from 'react';
import {eventlist} from '../lib/data/Events';
import EventCard from '../components/events/EventCard';
const Events:React.FC =() =>{
    let counter=0;
    return(
        <header className="App-header">
        <h4><i>Events</i></h4>
        <div className="container pagedisplay content-sec">
            <div className="row">
                {eventlist.map(event=>
                    {const isEven = counter % 2 === 0;
                    counter++;
                    return(
                    <div className="col-md-4">
                        <EventCard obj={event} isEven={isEven}/>
                    </div>)}
                )}
            </div>
        </div>
      </header>
    )
}
export default Events;