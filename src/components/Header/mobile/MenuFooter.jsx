import PropTypes from 'prop-types';
import help from '@/assets/mobile/nav/menu/help.png';
import location from '@/assets/mobile/nav/menu/location.png';
import safety from '@/assets/mobile/nav/menu/safety.png';
import usFlag from '@/assets/mobile/nav/menu/us-flag.png';
import chevron from '@/assets/mobile/nav/menu/chevron.png';

const MenuFooter = () => (
  <div className="menu-footer">
    <MenuFooterItem src={help} width="14" title="Help">
      <div>
        <img src={chevron} width="8" alt="help" />
      </div>
    </MenuFooterItem>
    <MenuFooterItem src={location} title="Where to Buy/Rent" width="12" />
    <MenuFooterItem src={safety} title="Safety" width="13" />
    <MenuFooterItem src={usFlag} title="EN" width="22" />
  </div>
);

const MenuFooterItem = ({
  src, width, title, children,
}) => (
  <button type="button" className="item">
    <div className="flex">
      <img src={src} width={width} alt={title} />
    </div>
    <div>{title}</div>
    {children}
  </button>
);

MenuFooterItem.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};

MenuFooterItem.defaultProps = {
  children: undefined,
};

export default MenuFooter;
