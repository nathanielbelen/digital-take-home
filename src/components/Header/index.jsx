import InformationBar from './desktop/InformationBar'
import NavBar from './desktop/NavBar'

const Header = ({ isDesktop }) => {
  if (isDesktop) {
    return (
      <div className="header">
        <InformationBar />
        <NavBar />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Header;
