import React from 'react';
import {eralistsorted} from '../lib/data/History';
import { EventProps } from '../lib/interfaces';
const History:React.FC =() =>{
    return(
        <header className="App-header">
        <h4><i>History</i></h4>
        <div className="container pagedisplay content-sec">
            <p>The street dance style of popping originated in the 1970s in California, particularly Oakland and Los Angeles with groups like the Electric Boogaloos</p>
            <p>Toronto has made its impact in popping through various notable events, crews, and individuals. Below is a timeline of it</p>
        </div>
        
        <div className="container pagedisplay content-sec stats-grid">
            <div className="grid-header">Year</div>
            <div className="grid-header">Groups/Individuals</div>
            <div className="grid-header">Events</div> 
            {eralistsorted.map(era=>
                    <React.Fragment>
                        <div>{era.year}</div>
                        <div>
                            {era.groups && era.groups.length > 0 && (
                            <div>
                            {era.groups.map((group: string, gIndex: number) => (
                            <p key={gIndex}>{group}</p>
                            ))}
                            </div>
                        )}
                        {era.individuals && era.individuals.length > 0 && (
                            <div>
                            {era.individuals.map((dancer: string, gIndex: number) => (
                            <p key={gIndex}>{dancer}</p>
                            ))}
                            </div>
                        )}
                        </div>
                        <div>
                            {era.events && era.events.length > 0 && (
                            <div>
                            {era.events.map((event: EventProps, gIndex: number) => (
                            <p key={gIndex}>{event.name}</p>
                            ))}
                            </div>
                        )}
                        </div>
                    </React.Fragment>
                )}
        </div>
      </header>
    )
}
export default History;