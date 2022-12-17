import help from "@/assets/mobile/nav/menu/help.png";
import location from "@/assets/mobile/nav/menu/location.png";
import safety from "@/assets/mobile/nav/menu/safety.png";
import usFlag from "@/assets/mobile/nav/menu/us-flag.png";
import chevron from "@/assets/mobile/nav/menu/chevron.png";

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
    <a className="item">
      <div className="flex">
        <img src={src} width={width} />
      </div>
      <div>{title}</div>
      { children }
    </a>
  );
};

export default MenuFooter;