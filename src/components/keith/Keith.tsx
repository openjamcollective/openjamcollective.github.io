import React, { useState } from "react";
import {workList, mcgill} from '../../lib/data/Work';
import WorkCard from "./WorkCard";
import './keith.css';
import DanceCard from "./DanceCard";
const Keith:React.FC =() =>{
  return (
    <header className="App-header">
        <h4><i>Keith Dang</i></h4>
        <h4><i>Work Experience</i></h4>
        <div className="grid-work">
            {workList.slice().map((event, index) => {
              return <WorkCard obj={event} />
            })}
        </div>
        <h4><i>Education</i></h4>
        <WorkCard obj={mcgill}/>
        <h4><i>Street Dance Awards</i></h4>
        <DanceCard/>
    </header>
  )
}

export default Keith;