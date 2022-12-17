import PropTypes from 'prop-types';

const NavLinks = ({ children }) => (
  <div className="nav-links nav-items">
    {children}
  </div>
);

const NavLink = ({
  setSelectedIndex, selectedIndex, index, link,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    setSelectedIndex(index);
  };

  return (
    <a className="nav-anchor" onClick={handleClick}>
      <div className={`nav-link ${index === selectedIndex ? 'active' : ''}`}>{link.name}</div>
    </a>
  );
};

NavLinks.propTypes = {
  children: PropTypes.array.isRequired,
};

NavLink.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number,
  index: PropTypes.number.isRequired,
  link: PropTypes.object.isRequired,
};

NavLink.defaultProps = {
  selectedIndex: null,
};

export { NavLink, NavLinks };
