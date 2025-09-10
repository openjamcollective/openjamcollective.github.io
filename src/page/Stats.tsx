import React, { useState, useMemo } from 'react';
import {eventlist} from '../lib/data/Events';
import { AffiliateProps } from '../lib/interfaces';
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
    
      // 👇 Calculate grand total
      const totalFunds = useMemo(() => {
        return Object.values(affiliateFunds).reduce((sum, val) => sum + val, 0);
      }, [affiliateFunds]);
    return(
        <header className="App-header">
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