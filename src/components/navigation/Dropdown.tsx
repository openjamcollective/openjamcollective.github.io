import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Dropdown: React.FC<{ title: string, links: Map<string, string>}> = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);
    const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

//   const handleClick = () => {
//     setNavbarOpen(!navbarOpen);
//   }
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
      const aboutNavBig = () => {
        return (<li className='nav-li' 
        onClick={toggleDropdown} 
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}>
          {props.title}
          {showDropdown && (
            <ul className='nav-ul-sub'>
                {Array.from(props.links.entries()).map(([key, value]) => (
                    <li>
                        <Link to={key}>{value}</Link>
                    </li>
                ))}
            </ul>
          )}
        </li>)
      }
    
      const aboutNavSmall = () => {
        return (<div>
             {Array.from(props.links.entries()).map(([key, value]) => (
                    <li className='nav-li'>
                        <Link to={key}>{value}</Link>
                    </li>
                ))}
        </div>)
      }
  return (
    <>
        {smallScreen ? aboutNavSmall(): aboutNavBig()} 
    </>
  );
}

export default Dropdown;