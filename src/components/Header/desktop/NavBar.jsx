const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo nav-items">logo</div>
      <div className="nav-links nav-items">
        <a href="#" className="nav-anchors">
          <div className="link active">SOLUTIONS</div>
        </a>
        <div className="link">PRODUCTS</div>
        <div className="link">AUTOMATION</div>
        <div className="link">EDUCATION</div>
        <div className="link">RESOURCES</div>
      </div>
      <div className="search nav-items">search</div>
    </div>
  );
};

export default NavBar;
