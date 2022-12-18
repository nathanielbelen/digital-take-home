import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// universal import
import Cart from './Cart';

// desktop imports
import { NavLinks, NavLink } from './desktop/NavLinks';
import { Emblems, Emblem } from './desktop/Emblems';
import Logo from './desktop/Logo';
import Dropdown from './desktop/Dropdown';
import Search from './desktop/Search';

// mobile imports
import MenuNav from './mobile/MenuNav';
import Hamburger from './mobile/Hamburger';
import './NavBar.css';

// asset imports
import navigation from '@/assets/navigation.json';
import search from '@/assets/mobile/nav/search.png';
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
          <Dropdown navigation={navigation} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
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
        <Emblem title="search" src={search} width="15" link="/" />
        <Emblem title="profile" src={profile} width="15" link="/" />
        <li className="emblem">
          <Cart isDesktop={isDesktop} src={cart} width="16" />
        </li>
      </Emblems>
      {showMenuNav && <MenuNav setShowMenuNav={setShowMenuNav} navigation={navigation} />}
    </div>
  );
};

NavBar.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default NavBar;
