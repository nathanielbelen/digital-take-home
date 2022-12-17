import Logo from './Logo'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav">
      <Logo />
      <div className="nav-links nav-items">
        <a href="#" className="nav-anchors">
          <div className="nav-link">SOLUTIONS</div>
        </a>
        <div className="nav-link">PRODUCTS</div>
        <div className="nav-link">AUTOMATION</div>
        <div className="nav-link">EDUCATION</div>
        <div className="nav-link">RESOURCES</div>
      </div>
      <div className="search nav-items">search</div>
    </div>
  );
};

export default NavBar;
