import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import MenuFooter from './MenuFooter';
import MenuTitle from './MenuTitle';
import MenuItem from './MenuItem';
import MenuBack from './MenuBack';

const MenuNav = ({ setShowMenuNav, navigation }) => {

  const [currentBack, setCurrentBack] = useState(null);
  const [currentNav, setCurrentNav] = useState(navigation);

  return (
    <div className="showMenuNav">
      <MenuTitle setShowMenuNav={setShowMenuNav} />
      {currentBack && (
        <MenuBack
          setCurrentNav={setCurrentNav}
          setCurrentBack={setCurrentBack}
          currentBack={currentBack}
        />
      )}
      {currentNav
        && currentNav.map((destination, index) => (
          <MenuItem
            destination={destination}
            index={index}
            key={index}
            setCurrentNav={setCurrentNav}
            setCurrentBack={setCurrentBack}
            currentBack={currentBack}
            currentNav={currentNav}
          />
        ))}
      {!currentBack && <MenuFooter />}
    </div>
  );
};

MenuNav.propTypes = {
  setShowMenuNav: PropTypes.func.isRequired,
  navigation: PropTypes.array.isRequired,
};

export default MenuNav;
