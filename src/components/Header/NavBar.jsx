import { useState, useEffect } from 'react';
import { NavLinks, NavLink } from './desktop/NavLinks';
import Logo from './desktop/Logo';
import Dropdown from './desktop/Dropdown';
import Search from './desktop/Search';
import Cart from './desktop/Cart';
import MenuNav from './mobile/MenuNav';
import { Emblems, Emblem } from './desktop/Emblems';
import './NavBar.css';
import navigation from '@/assets/navigation.json';
import search from '@/assets/mobile/nav/search.png';
import hamburger from '@/assets/mobile/nav/hamburger.png';
import profile from '@/assets/mobile/nav/profile.png';
import cart from '@/assets/mobile/nav/cart.png';

const NavBar = ({ isDesktop }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showMenuNav, setShowMenuNav] = useState(false);

  useEffect(() => {
    if (selectedIndex === 0 || selectedIndex === 1) {
      setDropdownOpen(true);
    } else {
      setDropdownOpen(false);
    }
  }, [selectedIndex]);

  if (isDesktop === true) {
    return (
      <>
        <div className="nav">
          <Logo width="115" />
          <NavLinks>
            {navigation.map((link, index) => (
              <NavLink
                setSelectedIndex={setSelectedIndex}
                selectedIndex={selectedIndex}
                index={index}
                link={link}
                key={index}
              />
            ))}
          </NavLinks>
          <Search />
        </div>
        {dropdownOpen && (
          <Dropdown navigation={navigation} selectedIndex={selectedIndex} />
        )}
      </>
    );
  }

  return (
    <div className="nav-mobile">
      <div className="left">
        <Hamburger setShowMenuNav={setShowMenuNav} />
        <Logo width="115" />
      </div>
      <Emblems>
        <Emblem title="search" src={search} width="15" link="#" />
        <Emblem title="profile" src={profile} width="15" link="/" />
        <li className="emblem">
          <Cart isDesktop={isDesktop} src={cart} width="16" />
        </li>
      </Emblems>
      {showMenuNav && <MenuNav setShowMenuNav={setShowMenuNav} navigation={navigation} />}
    </div>
  );
};

const Hamburger = ({ setShowMenuNav }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setShowMenuNav(true);
  };

  return (
    <button type="button" className="hamburger" onClick={handleClick}>
      <img src={hamburger} width="30" alt="menu" />
    </button>
  );
};

export default NavBar;
