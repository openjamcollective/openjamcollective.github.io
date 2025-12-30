import React, { useState } from "react";
import {workList, mcgill} from '../../lib/data/Work';
import WorkCard from "./WorkCard";
import './keith.css';
import DanceCard from "./DanceCard";

function extractYouTubeId(url: string): string {
  const regex =
    /(?:youtube\.com\/(?:.*v=|embed\/|v\/)|youtu\.be\/)([^&?\/\s]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
}

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
        <h4><i>Projects</i></h4>
        <div className="grid-projects-card">
          <div>
            <p><b>Pokemon Full Stack Game</b></p>
            <p>Developed a full-stack web application using Java, Spring Boot, MySQL, and React, deployed on AWS</p>
            <p>Implemented RESTful APIs to manage Pokémon selection, turn-based battles, experience gain, and leveling logic</p>
            <a href="https://github.com/keithdang/pokemon-spring">Github</a>
          </div>
          <div>
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeId("https://www.youtube.com/watch?v=Qr89vcumdyU")}`}
                title={`Pokemon Spring`}
                className="vid w-full h-full rounded-2xl shadow-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> 
          </div>
        </div>
        <h4><i>Street Dance Accolades</i></h4>
        <DanceCard/>
          
    </header>
  )
}

export default Keith;