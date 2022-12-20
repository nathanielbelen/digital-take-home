import PropTypes from 'prop-types';
import chevron from '@/assets/mobile/nav/menu/chevron.png';

const MenuBack = ({ setCurrentNav, setCurrentBack, currentBack }) => (
  <button
    type="button"
    className="menu-item back"
    onClick={() => {
      setCurrentNav(currentBack.val);
      setCurrentBack(currentBack.prev);
    }}
  >
    <img src={chevron} width="10" alt="go back" />
    <div>GO BACK</div>
  </button>
);

MenuBack.propTypes = {
  setCurrentNav: PropTypes.func.isRequired,
  setCurrentBack: PropTypes.func.isRequired,
  currentBack: PropTypes.object,
};

MenuBack.defaultProps = {
  currentBack: null,
};

export default MenuBack;
