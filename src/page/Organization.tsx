import React from 'react';
import {objectives, orgInfoList} from '../lib/data/Info';
import OrganizationCard from '../components/about/OrganizationCard';
const Organization:React.FC =() =>{
    return(
        <header className="App-header">
        <div className="container pagedisplay content-sec">
            {orgInfoList.map(info=>
                    <div>
                        <OrganizationCard obj={info}/>
                    </div>
                )}
        </div>
      </header>
    )
}
export default Organization;