import Info from './desktop/Info'
import NavBar from './desktop/NavBar'

const Header = ({ isDesktop }) => {
  if (isDesktop) {
    return (
      <div className="header">
        <Info />
        <NavBar />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Header;
