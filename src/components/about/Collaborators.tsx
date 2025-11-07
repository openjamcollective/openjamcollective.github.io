import React, { useState, useMemo } from 'react';
import {eventlist, getCollaboratorImageByName, collaborators, botb} from '../../lib/data/Events';
import { AffiliateProps } from '../../lib/interfaces';
import { MediaType } from '../../lib/util';
import borderless6 from "../../lib/images/borderless6.jpg";
import borderless7 from "../../lib/images/borderless7.jpg";
import botb3 from "../../lib/images/botb3.jpg";

const Collaborators:React.FC =() =>{
    
      const affiliateFunds = useMemo(() => {
        const map: Record<string, number> = {};
    
        eventlist.forEach((event) => {
          event.affiliates?.forEach((affiliate: AffiliateProps) => {
            if(affiliate.name !== collaborators.DONATIONS.name){
                map[affiliate.name] = (map[affiliate.name] || 0) + affiliate.fund;
            }
          });
        });
    
        return map;
      }, [eventlist]);
    
    const totalEvents = useMemo(() => {
        var numEvents = 0;
        var numPrograms = 0;
    
        eventlist.forEach((event) => {
          if(event.attendees && event.event !== MediaType.Program){
            numEvents ++;
          }else if(event.event == MediaType.Program){
            numPrograms ++;
          }
        });
    
        return [numEvents, numPrograms];
      }, [eventlist]);
      // 👇 Calculate grand total
      const totalFunds = useMemo(() => {
        return Object.values(affiliateFunds).reduce((sum, val) => sum + val, 0);
      }, [affiliateFunds]);
    return(
        <div>
            <h4><i>Partners</i></h4>
            <div className="collabs">
                <div className="grid-container">
                {Object.entries(affiliateFunds)
                    .sort(([, a], [, b]) => b - a)
                    .map(([name, fund]) => (
                    <div key={name} className="img-wrapper">
                        {getCollaboratorImageByName(name) && (
                        <img src={getCollaboratorImageByName(name)} alt={name} className="img-small" />
                        )}
                    </div>
                    ))}
                </div>
            </div>
            <div className='image-container'>  
                <img src={borderless6}/>
                <img src={borderless7}/>
                <img src={botb3}/>
                {/* <div className="overlay-text">
                    <p>All events and programs OJC has done has been free to create accessibility within the city</p>
                    <p># Events with over 100+ attendees: {totalEvents[0]}</p>
                    <p># Weekly Programs: {totalEvents[1]}</p>
                </div> */}
            </div>
      </div>
    )
}
export default Collaborators;