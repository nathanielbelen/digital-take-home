import { useState, useCallback, useEffect } from 'react';
import MenuFooter from './MenuFooter';
import chevron from '@/assets/mobile/nav/menu/chevron.png';
import close from '@/assets/mobile/nav/menu/close.png';

class Visit {
  constructor(val, prev) {
    this.val = val;
    this.prev = prev || null;
  }
}

const MenuNav = ({ setShowMenuNav, navigation }) => {
  const nav = useCallback(() => navigation.map((val) => {
    val.back = navigation;
    val.next.forEach((val2) => {
      val2.back = val;
    });
    return val;
  }), [navigation]);

  const [currentBack, setCurrentBack] = useState(null);
  const [currentNav, setCurrentNav] = useState(nav);

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

const MenuTitle = ({ setShowMenuNav }) => {
  const handleClick = () => {
    setShowMenuNav(false);
  };

  return (
    <div className="menu-title">
      <div>Menu</div>
      <button type="button" onClick={handleClick}>
        <img src={close} width="12" />
      </button>
    </div>
  );
};

const MenuItem = ({
  setCurrentBack,
  setCurrentNav,
  currentNav,
  currentBack,
  index,
  destination,
}) => {
  const handleClick = () => {
    setCurrentBack(new Visit(currentNav, currentBack));
    setCurrentNav(currentNav[index].next);
  };

  return (
    <button
      type="button"
      className={`menu-item link ${!currentBack && 'base'}`}
      key={index}
      onClick={handleClick}
    >
      <div>{destination.name}</div>
      <img src={chevron} width="10" alt={destination.name} />
    </button>
  );
};

const MenuBack = ({ setCurrentNav, setCurrentBack, currentBack }) => (
  <button
    className="menu-item back"
    onClick={() => {
      setCurrentNav(currentBack.val);
      setCurrentBack(currentBack.prev);
    }}
  >
    <img src={chevron} width="10" />
    <div>GO BACK</div>
  </button>
);

export default MenuNav;
