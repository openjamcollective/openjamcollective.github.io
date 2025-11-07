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
import History from './page/History';
import Organization from './page/Organization';
import Events from './page/Events';
import Contact from './page/Contact';
import Stats from './page/Stats';
import {eventlist} from './lib/data/Events';
import EventCard from './components/events/EventPanel';
import EventPanel from './components/events/EventPanel';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NaviBar/>
        <Routes>
          <Route path="/team" element={<About/>} />
          <Route path="/about" element={<Organization/>} />
          <Route path="/about/history" element={<History/>} />
          <Route path="/events/stats" element={<Stats/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/contact" element={<Contact/>} />
          {eventlist.map(event=>
            <Route path={"/events/"+event.name.replace(/\s+/g, '').toLowerCase()} element={<EventPanel obj={event}/>} />
          )}
          <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
