import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ojc from '../../lib/images/OJC_Full.png';
import menuIcon from '../../lib/images/icons8-menu-squared-50.png';
import './Navbar.css'

const NaviBar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
         {smallScreen ? aboutNavSmall(): aboutNavBig()} 
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

  const aboutNavBig = () => {
    return (<li className='nav-li' 
    onClick={toggleDropdown} 
    onMouseEnter={() => setShowDropdown(true)}
    onMouseLeave={() => setShowDropdown(false)}>
      About
      {showDropdown && (
        <ul className='nav-ul-sub'>
          <li>
            <Link to="/about/ojc">Organization</Link>
          </li>
          <li>
            <Link to="/about/members">Team</Link>
          </li>
        </ul>
      )}
    </li>)
  }

  const aboutNavSmall = () => {
    return (<div>
      <li className='nav-li'>
            <Link to="/about/ojc">Organization</Link>
          </li>
          <li className='nav-li'>
            <Link to="/about/members">Team</Link>
          </li>
    </div>)
  }

  return (
    <div className="nav-bar">
      <img className="nav-image" src={ojc}/>
          { !smallScreen || navbarOpen ? basicNav() : 
          <div className="menu-icon">
            <img onClick={() => handleClick()}  src={menuIcon}/>
          </div>
          }
    </div>
  );
}

export default NaviBar;
