import React from 'react';
import {
  // BrowserRouter as Router,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import NaviBar from './components/navigation/NavBar';
import Home from './page/Home';
import About from './page/About';
import Organization from './page/Organization';
import Events from './page/Events';
import Contact from './page/Contact';
import {eventlist} from './lib/data/Events';
import EventCard from './components/events/EventPanel';
import EventPanel from './components/events/EventPanel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NaviBar/>
        <Routes>
          <Route path="/about/ojc" element={<Organization/>} />
          <Route path="/about/members" element={<About/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/contact" element={<Contact/>} />
          {eventlist.map(event=>
            <Route path={"/events/"+event.link} element={<EventPanel obj={event}/>} />
          )}
          <Route path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
