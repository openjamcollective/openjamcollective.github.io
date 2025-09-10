import React from 'react';
import {eralistsorted} from '../lib/data/History';
import { EventProps } from '../lib/interfaces';
const History:React.FC =() =>{
    return(
        <header className="App-header">
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