import PropTypes from 'prop-types';
import { Emblems, Emblem } from './Emblems';
import Locale from './Locale';
import Cart from '../Cart';
import './InformationBar.css';

// images for emblems
import secure from '@/assets/desktop/information/secure.png';
import help from '@/assets/desktop/information/help.png';
import location from '@/assets/desktop/information/location.png';
import profile from '@/assets/desktop/information/profile.png';
import cart from '@/assets/desktop/information/cart.png';

const InformationBar = ({ isDesktop }) => (
  <div className="top">
    <div className="information">
      <div className="information-flex">
        <Locale />
        <Emblems>
          <Emblem title="secure" src={secure} width="15" link="/" anchorClass="flex" />
          <Emblem title="help" src={help} width="15" link="/" anchorClass="flex" />
          <Emblem title="location" src={location} width="12" link="/" anchorClass="flex" />
          <Emblem title="profile" src={profile} width="15" link="/" anchorClass="flex" />
        </Emblems>
      </div>
      <Cart isDesktop={isDesktop} src={cart} width="16" />
    </div>
  </div>
);

InformationBar.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default InformationBar;
