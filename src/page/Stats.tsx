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
        <div>
            <h5>Affiliate Contributions</h5>
            <ul>
            {Object.entries(affiliateFunds)
            .sort(([, a], [, b]) => b - a)
            .map(([name, fund]) => (
            <div key={name}>
                {name}: {fund}
            </div>
            ))}
            </ul>
            <p><b>Total Funds: {totalFunds}</b></p>
        </div>
      </header>
    )
}
export default Stats;