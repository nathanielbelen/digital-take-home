import { useState, useEffect } from "react";
import { NavLinks, NavLink } from "./NavLinks";
import Logo from "./Logo";
import Dropdown from "./Dropdown";
import Search from './Search';
import "./NavBar.css";
import navigation from "../../../assets/navigation.json";

const NavBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (selectedIndex !== null) {
      setDropdownOpen(true);
    }
  }, [selectedIndex]);

  return (
    <>
      <div className="nav">
        <Logo />
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
      {dropdownOpen && <Dropdown navigation={navigation} selectedIndex={selectedIndex} />}
    </>
  );
};

export default NavBar;
