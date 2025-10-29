import React, { useState, useMemo } from 'react';
import {eventlist} from '../lib/data/Events';
import EventCard from '../components/events/EventCard';
import { AffiliateProps } from '../lib/interfaces';
import Instagram from '../components/instagram/Instagram';
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
  
      // 👇 Create a map of affiliateName -> totalFunds
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
          {/* <div className="row">
                <Instagram/>
            </div> */}
      </header>
    );
  };

export default Events;
