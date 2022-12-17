import chevron from "@/assets/mobile/nav/menu/chevron.png";
import help from "@/assets/mobile/nav/menu/help.png";
import location from "@/assets/mobile/nav/menu/location.png";
import safety from "@/assets/mobile/nav/menu/safety.png";
import usFlag from "@/assets/mobile/nav/menu/us-flag.png";
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
      {!currentBack && <MenuFooter />}
    </div>
  );
};

const MenuFooter = () => {
  return (
    <div className="menu-footer">
      <MenuFooterItem src={help} width='14' title='Help'>
        <div>
          <img src={chevron} width="8" />
        </div>
      </MenuFooterItem>
      <MenuFooterItem src={location} title='Where to Buy/Rent' width='12' />
      <MenuFooterItem src={safety} title='Safety' width='13' />
      <MenuFooterItem src={usFlag} title='EN' width='22' />
    </div>
  );
};

const MenuFooterItem = ({ src, width, title, children }) => {
  return (
    <div className="item">
      <div className="flex">
        <img src={src} width={width} />
      </div>
      <div>{title}</div>
      { children }
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
    <div
      className={`menu-item link ${!currentBack && "base"}`}
      key={index}
      onClick={handleClick}
    >
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
