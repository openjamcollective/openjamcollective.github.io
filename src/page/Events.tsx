import React, { useState } from 'react';
import {eventlist} from '../lib/data/Events';
import EventCard from '../components/events/EventCard';
const Events: React.FC = () => {
    const pageSize = 3; // Number of EventCards per page
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(eventlist.length / pageSize);
  
    const handleNextPage = () => {
      setCurrentPage((prevPage: number) => Math.min(prevPage + 1, totalPages));
    };
  
    const handlePrevPage = () => {
      setCurrentPage((prevPage: number) => Math.max(prevPage - 1, 1));
    };
  
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    return (
      <header className="App-header">
        <h4>
          <i>Events</i>
        </h4>
        <div className="container pagedisplay content-sec">
          <div className="row">
            {eventlist.slice(startIndex, endIndex).map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div className="col-md-4" key={index}>
                  <EventCard obj={event} isEven={isEven} />
                </div>
              );
            })}
          </div>
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </button>
            ))}
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </header>
    );
  };
// const Events:React.FC =() =>{
//     let counter=0;
//     return(
//         <header className="App-header">
//         <h4><i>Events</i></h4>
//         <div className="container pagedisplay content-sec">
//             <div className="row">
//                 {eventlist.map(event=>
//                     {const isEven = counter % 2 === 0;
//                     counter++;
//                     return(
//                     <div className="col-md-4">
//                         <EventCard obj={event} isEven={isEven}/>
//                     </div>)}
//                 )}
//             </div>
//         </div>
//       </header>
//     )
// }
export default Events;