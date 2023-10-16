import React, { useEffect, useState } from 'react';
import { EventProps} from '../../lib/interfaces'
import './Events.css';
import { Link } from 'react-router-dom';
import * as Util from '../../lib/util';

const EventCard:React.FC<{ obj: EventProps, isEven: boolean }> = (props) => {
    const [showCard, setShowCard] = useState(true);
    const [smallScreen, setSmallScreen] = useState(false);

    const toggleCard = () => {
      setShowCard(!showCard);
    };

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 768) {
            setSmallScreen(true);
          } else {
            setSmallScreen(false);
          }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div>
            {props.isEven || !smallScreen ?
            <div className='event-info'>
                {mediaDiv(props.obj)}
                {infoDiv(props.obj)}
            </div>
            :
            <div className='event-info'>
                {infoDiv(props.obj)}
                {mediaDiv(props.obj)}
            </div>
            }
        </div>
  );
}

const infoDiv = (props: EventProps) => {
    return (<div className="info-div">
        <div className="card-header text-white">
            <h4>{props.name}</h4>
        </div>            
        <p>{props.about}</p>
        <p>{props.location}</p>
        {/* <p>{Util.formatDate(Util.getLatestDate(props.date).toLocaleDateString())}</p> */}
        <p>{Util.formatDatesWithEvents(props.date, props.event, false)}</p>
        <Link to={"/events/"+props.name.replace(/\s+/g, '').toLowerCase()}>
            <button>More</button>
        </Link>
    </div>)
}

const mediaDiv = (props: EventProps) => {
    return (<div>
              {props.media &&
                    <div>
                        <img className="event-image" src={props.media}/>
                    </div>
                }
    </div>)
}

export default EventCard;
