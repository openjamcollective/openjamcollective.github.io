import React, { useState } from 'react';
import { EventProps} from '../../lib/interfaces'
import './Events.css';
import {createYoutube} from '../../lib/data/Internet';
import iglogo from '../../lib/images/ig-white.png';
import fblogo from '../../lib/images/facebook.png';
import * as Util from '../../lib/util';

const EventPanel:React.FC<{ obj: EventProps }> = (props) => {
    const [showCard, setShowCard] = useState(true);

    const toggleCard = () => {
      setShowCard(!showCard);
    };

    return (
        <header className="App-header">
            <h4><i>{props.obj.name}</i></h4>
            {infoDiv(props.obj)}       
            {mediaDiv(props.obj)}       
        </header>
  );
}

const infoDiv = (props: EventProps) => {
    return (<div className={props.event == Util.MediaType.Program ? '' : 'info-panel'}>
        <p>{props.about}</p>
        {props.role && <p>{props.role}</p>}
        <p>{props.location}</p>
        {dateInfo(props)}
        <div className="logos">
            {props.instagram && <a href={Util.instagram + props.instagram}>
                <img className="ig-logo" src={iglogo}/>
            </a>}
            {props.facebook && <a href={Util.fb_event + props.facebook}>
                <img className="fb-logo" src={fblogo}/>
            </a>}
        </div>
    </div>)
}

const dateInfo = (props: EventProps) => {
    return (
        <div>
          {props.event == Util.MediaType.Series ? (
            <p>
                {props.date
                    .map(day => Util.formatDate(day.toLocaleDateString()))
                    .join(', ')}
            </p>
          ) : (
            <p>{Util.formatDate(props.date[0].toLocaleDateString())}</p>
          )}
        </div>
      );
}

const mediaDiv = (props: EventProps) => {
    return (<div className='vid-div'>
           {props.video && <iframe className="event-vid" src={createYoutube(props.video)}/>}
           {props.media2 && <img className="event-photo" src={props.media2}/>}
    </div>)
}

export default EventPanel;
