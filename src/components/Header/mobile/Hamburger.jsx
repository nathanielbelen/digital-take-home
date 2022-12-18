import PropTypes from 'prop-types';
import hamburger from '@/assets/mobile/nav/hamburger.png';

const Hamburger = ({ setShowMenuNav, width }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setShowMenuNav(true);
  };

  return (
    <button type="button" className="hamburger" onClick={handleClick}>
      <img src={hamburger} width={width} alt="menu" />
    </button>
  );
};

Hamburger.propTypes = {
  setShowMenuNav: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
};

export default Hamburger;
