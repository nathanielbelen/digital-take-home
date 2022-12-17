import { useState, useEffect } from "react";
import { NavLinks, NavLink } from "./desktop/NavLinks";
import Logo from "./desktop/Logo";
import Dropdown from "./desktop/Dropdown";
import Search from "./desktop/Search";
import Cart from "./desktop/Cart";
import MenuNav from "./mobile/MenuNav";
import { Emblems, Emblem } from "./desktop/Emblems";
import ImageLink from "./ImageLink";
import "./NavBar.css";
import navigation from "@/assets/navigation.json";
import search from '@/assets/mobile/nav/search.png'
import hamburger from '@/assets/mobile/nav/hamburger.png'
import profile from '@/assets/mobile/nav/profile.png'
import cart from '@/assets/mobile/nav/cart.png'


const NavBar = ({ isDesktop }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showMenuNav, setShowMenuNav] = useState(false);

  useEffect(() => {
    if (selectedIndex !== null) {
      setDropdownOpen(true);
    }
  }, [selectedIndex]);

  if (isDesktop === true) {
    return (
      <>
        <div className="nav">
          <Logo width="115" />
          <NavLinks>
            {navigation.map((link, index) => {
              return (
                <NavLink
                  setSelectedIndex={setSelectedIndex}
                  selectedIndex={selectedIndex}
                  index={index}
                  link={link}
                  key={index}
                />
              );
            })}
          </NavLinks>
          <Search />
        </div>
        {dropdownOpen && (
          <Dropdown navigation={navigation} selectedIndex={selectedIndex} />
        )}
      </>
    );
  } else {
    // need to style this to have nav be flex
    return (
      <>
        <div className="nav-mobile">
          <div className="left">
            <Hamburger setShowMenuNav={setShowMenuNav} />
            <Logo width="115" />
          </div>
          <Emblems>
            <Emblem title="search" src={search} width="15" link="#" />
            <Emblem title="profile" src={profile} width="15" link="#" />
            <li className='emblem'>
              <Cart src={cart} width='16' />
            </li>
          </Emblems>
          {showMenuNav && <MenuNav setShowMenuNav={setShowMenuNav} navigation={navigation} />}
        </div>
      </>
    );
  }
};

const Hamburger = ({ setShowMenuNav }) => {

  const handleClick = (e) => {
    e.preventDefault();
    setShowMenuNav(true);
  }

  return (<ImageLink anchorClass='hamburger' src={hamburger} width='30' onClick={handleClick}/>)
};

export default NavBar;
