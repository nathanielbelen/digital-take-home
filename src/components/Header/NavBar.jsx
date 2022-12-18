import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// universal import
import Cart from './Cart';
import './NavBar.css';

// desktop imports
import { NavLinks, NavLink } from './desktop/NavLinks';
import { Emblems, Emblem } from './desktop/Emblems';
import Logo from './desktop/Logo';
import Dropdown from './desktop/Dropdown';
import Search from './desktop/Search';

// mobile imports
import MenuNav from './mobile/MenuNav';
import Hamburger from './mobile/Hamburger';

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
          <Dropdown
            navigation={navigation}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        )}
      </>
    );
  }

  return (
    <div className="nav-mobile">
      <div className="left">
        <Hamburger setShowMenuNav={setShowMenuNav} width="21" />
        <Logo width="91" />
      </div>
      <Emblems>
        <Emblem title="search" src={search} width="17" link="/" anchorClass="flex" />
        <Emblem title="profile" src={profile} width="18" link="/" anchorClass="flex" />
        <li className="emblem">
          <Cart isDesktop={isDesktop} src={cart} width="20" anchorClass="flex" />
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
