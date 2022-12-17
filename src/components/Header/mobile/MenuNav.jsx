import chevron from "../../../assets/mobile/nav/menu/chevron.png";
import { useState, useCallback, useEffect } from "react";

class Visit {
  constructor(val, prev) {
    this.val = val;
    this.prev = prev || null;
  }
}

const MenuNav = ({ navigation }) => {
  const nav = useCallback(() => {
    return navigation.map((val) => {
      val.back = navigation;
      val.next.forEach((val2) => {
        val2.back = val;
      });
      return val;
    });
  }, [navigation]);

  const [currentBack, setCurrentBack] = useState(null);
  const [currentNav, setCurrentNav] = useState(nav);

  return (
    <div className="showMenuNav">
      <MenuTitle />
      {currentBack && (
        <MenuBack
          setCurrentNav={setCurrentNav}
          setCurrentBack={setCurrentBack}
          currentBack={currentBack}
        />
      )}
      {currentNav &&
        currentNav.map((destination, index) => (
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
      {!currentBack && <Footing />}
    </div>
  );
};

const Footing = () => {
  return (
    <div className="footing">
      <div>Help</div>
      <div>Where to Buy/Rent</div>
      <div>Safety</div>
      <div>EN</div>
    </div>
  );
};

const MenuTitle = () => {
  return (
    <div className="menu-title">
      <div>Menu</div>
      <div>X</div>
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
    <div className={`menu-item link ${!currentBack && 'base'}`} key={index} onClick={handleClick}>
      <div>{destination.name}</div>
      <img src={chevron} width="10" />
    </div>
  );
};

const MenuBack = ({ setCurrentNav, setCurrentBack, currentBack }) => {
  return (
    <div
      className="menu-item back"
      onClick={() => {
        setCurrentNav(currentBack.val);
        setCurrentBack(currentBack.prev);
      }}
    >
      <img src={chevron} width="10" />
      <div>GO BACK</div>
    </div>
  );
};

export default MenuNav;
