import PropTypes from 'prop-types';
import InformationBar from './desktop/InformationBar';
import NavBar from './NavBar';
import './index.css';

const Header = ({ isDesktop }) => {
  if (isDesktop) {
    return (
      <div className="header">
        <InformationBar isDesktop={isDesktop} />
        <NavBar isDesktop={isDesktop} />
      </div>
    );
  }
  return (
    <div className="header-mobile">
      <NavBar isDesktop={isDesktop} />
    </div>
  );
};

Header.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default Header;
