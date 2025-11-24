import React, { useState } from "react";
import { DanceProps } from "../../lib/interfaces";
import { danceList } from "../../lib/data/Dance";
const DanceCard:React.FC=() => {
  return (
    <div className="table-container">
    <table className="event-table dance-table">
      <thead>
        <tr>
          <th>Event</th>
          <th>Placement</th>
          <th>Dance Style</th>
          <th>Format</th>
          <th>Year</th>
          <th>Location</th>
        </tr>
      </thead>

      <tbody>
        {danceList.map((row, i) => (
          <tr key={i}>
            <td>{row.title}</td>
            <td>{getPlacement(row.placement)}</td>
            <td>{row.style}</td>
            <td>{row.quantity}v{row.quantity}</td>
            <td>{row.year}</td>
            <td><i>{row.location}</i></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

const getPlacement = (num: number): string => {
  switch (num) {
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 4:
      return "Semi Finals";
    default:
      return `Top ${num}`;
  }
};

export default DanceCard;