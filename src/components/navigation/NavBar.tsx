import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ojc from '../../lib/images/OJC_Full.png';
import menuIcon from '../../lib/images/icons8-menu-squared-50.png';
import './Navbar.css'
import Dropdown from './Dropdown';

const NaviBar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNavbarOpen(true);
        setSmallScreen(false);
      } else {
        setNavbarOpen(false);
        setSmallScreen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const basicNav = () =>{
    return (
      <nav className='nav-par' onClick={() => handleClick()}>
        <ul className='nav-list grid-item'>
          <li className='nav-li'>
            <Link to="/">Home</Link>
          </li>
          <Dropdown title={'About'} links={new Map<string, string>([["/about/ojc", "Organization"], ["/about/members", "Team"]])} />
          <li className='nav-li'>
            <Link to="/events">Events</Link>
          </li>
          <li className='nav-li'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }


  return (
    <div className="nav-bar">
      <Link to="/" className='nav-logo'>
        <img className="nav-image" src={ojc} alt="OJC Logo" />
      </Link>
      {/* <img className="nav-image" src={ojc}/> */}
          { !smallScreen || navbarOpen ? basicNav() : 
          <div className="menu-icon">
            <img onClick={() => handleClick()}  src={menuIcon}/>
          </div>
          }
    </div>
  );
}

export default NaviBar;
