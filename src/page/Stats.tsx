import React, { useState, useMemo } from 'react';
import {eventlist} from '../lib/data/Events';
import { AffiliateProps } from '../lib/interfaces';
import { MediaType } from '../lib/util';
const Stats:React.FC =() =>{
      const affiliateFunds = useMemo(() => {
        const map: Record<string, number> = {};
    
        eventlist.forEach((event) => {
          event.affiliates?.forEach((affiliate: AffiliateProps) => {
            map[affiliate.name] = (map[affiliate.name] || 0) + affiliate.fund;
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
        <header className="App-header">
        <div>
            <p>All events and programs OJC has done has been free to create accessibility within the city</p>
            <p># Events with over 100+ attendees: {totalEvents[0]}</p>
            <p># Programs: {totalEvents[1]}</p>
        </div>
        <h4><i>Collaborators</i></h4>
        
        <div>
            <ul>
            {Object.entries(affiliateFunds)
            .sort(([, a], [, b]) => b - a)
            .map(([name, fund]) => (
            <div key={name}>
                {name}
            </div>
            ))}
            </ul>
            {/* <p><b>Total Funds: {totalFunds}</b></p> */}
        </div>
      </header>
    )
}
export default Stats;