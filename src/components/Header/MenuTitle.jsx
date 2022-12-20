import PropTypes from 'prop-types';
import close from '@/assets/mobile/nav/menu/close.png';

const MenuTitle = ({ setShowMenuNav }) => {
  const handleClick = () => {
    setShowMenuNav(false);
  };

  return (
    <div className="menu-title">
      <div>Menu</div>
      <button type="button" onClick={handleClick}>
        <img src={close} width="12" alt="close menu" />
      </button>
    </div>
  );
};

MenuTitle.propTypes = {
  setShowMenuNav: PropTypes.func.isRequired,
};

export default MenuTitle;
