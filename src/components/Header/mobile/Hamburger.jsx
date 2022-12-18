import PropTypes from 'prop-types';
import hamburger from '@/assets/mobile/nav/hamburger.png';

const Hamburger = ({ setShowMenuNav }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setShowMenuNav(true);
  };

  return (
    <button type="button" className="hamburger" onClick={handleClick}>
      <img src={hamburger} width="30" alt="menu" />
    </button>
  );
};

Hamburger.propTypes = {
  setShowMenuNav: PropTypes.func.isRequired,
};

export default Hamburger;
