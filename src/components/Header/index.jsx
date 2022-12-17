import InformationBar from "./desktop/InformationBar";
import NavBar from "./desktop/NavBar";

const Header = ({ isDesktop }) => {
  if (isDesktop) {
    return (
      <div className="container">
        <InformationBar />
        <NavBar />
      </div>
    );
  } else {
    return <div className="container"></div>;
  }
};

export default Header;
