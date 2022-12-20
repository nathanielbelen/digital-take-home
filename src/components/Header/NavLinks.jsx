import PropTypes from 'prop-types';

const NavLinks = ({ children }) => (
  <div className="nav-links nav-items">
    {children}
  </div>
);

const NavLink = ({ setSelectedIndex, selectedIndex, index, link }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  // extra functionality possible when full application built out.
  // give component 'active' flag when routing matches
  if (link.url) {
    return (
      <a href={link.url} className="nav-anchor">
        <div className="nav-link">{link.name}</div>
      </a>
    );
  }

  return (
    <button type="button" className="nav-anchor" onClick={handleClick}>
      <div className={`nav-link ${index === selectedIndex ? 'active' : ''}`}>{link.name}</div>
    </button>
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
