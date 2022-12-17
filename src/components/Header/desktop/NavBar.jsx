import { useState, useEffect } from 'react';
import Logo from './Logo'
import { NavLinks, NavLink } from './NavLinks'
import './NavBar.css'
import navigation from '../../../assets/navigation.json';

const NavBar = ({ setDropdownOpen }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      setDropdownOpen(true);
    }
  }, [selectedIndex])

  return (
    <div className="nav">
      <Logo />
      <NavLinks>
        {navigation.map((link, index) => {
          return <NavLink setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} index={index} link={link} key={index} />
        })}
      </NavLinks>
      <div className="search nav-items">search</div>
    </div>
  );
};

export default NavBar;
