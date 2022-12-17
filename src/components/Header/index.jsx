import { useState } from 'react';
import InformationBar from './desktop/InformationBar'
import NavBar from './desktop/NavBar'
import Dropdown from './desktop/Dropdown'

const Header = ({ isDesktop }) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (isDesktop) {
    return (
      <div className="header">
        <InformationBar />
        <NavBar setDropdownOpen={setDropdownOpen} />
        { dropdownOpen && <Dropdown />}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Header;
