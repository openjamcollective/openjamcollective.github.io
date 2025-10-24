import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ojc from '../../lib/images/OJC_Full.png';
import menuIcon from '../../lib/images/icons8-menu-squared-50.png';
import './Navbar.css';
import Dropdown from './Dropdown';

const NaviBar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // ✅ ref for mobile menu
  const toggleMenu = () => setNavbarOpen(!navbarOpen);

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
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setNavbarOpen(false);
      }
    };

    if (navbarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [navbarOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/team", label: "Team" },
    { path: "/events", label: "Events" },
    { path: "/contact", label: "Contact" },
  ];

  const basicNav = (
    <nav className="nav-par">
      <ul className="nav-list grid-item">
            {navLinks.map(({ path, label }) => (
      <li className="nav-li" key={path}>
        <Link to={path}>{label}</Link>
      </li>
    ))}
      </ul>
    </nav>
  );

  return (
    <>
      <div className="nav-bar">
        <Link to="/" className="nav-logo">
          <img className="nav-image" src={ojc} alt="OJC Logo" />
        </Link>

        {smallScreen ? (
          <div className="menu-container">
            <img
              onClick={toggleMenu}
              className="menu-icon"
              src={menuIcon}
              alt="Menu"
            />
          </div>
        ) : (
          basicNav
        )}
      </div>

      {/* Mobile dropdown that spans full width */}
      {smallScreen && navbarOpen && (
        <div className="mobile-menu-full" ref={dropdownRef}>
          {basicNav}
        </div>
      )}
    </>
  );
};

export default NaviBar;