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

export { NavLink, NavLinks };
