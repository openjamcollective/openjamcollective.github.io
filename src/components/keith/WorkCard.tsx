import React from "react";
import { WorkProps } from "../../lib/interfaces";
const WorkCard:React.FC<{ obj: WorkProps }> = (props) => {
  return (
        <div className="grid-work-card">
          <div className="grid-photo">
             <img src={props.obj.logo}/>
          </div>
          <div>
            <p><b>{props.obj.title}</b></p>
            <p>{props.obj.company}</p>
            <p>{dateFormat(props.obj.date)}</p>
            <p>{props.obj.location}</p>
          </div>
            
        </div>
  )
}

const dateFormat = (dates: Date[]) => {
  const startYear = dates[0].getFullYear();
  const endYear = dates[1].getFullYear();

  // Same year
  if (startYear === endYear) {
    return startYear.toString();
  }

  // Different years
  return `${startYear} – ${endYear}`;
};

export default WorkCard;