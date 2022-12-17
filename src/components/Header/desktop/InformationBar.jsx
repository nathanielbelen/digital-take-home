import { Emblems, Emblem } from './Emblems';
import Locale from './Locale';
import Cart from './Cart';
import './InformationBar.css'

// images for emblems
import secure from '../../../assets/desktop/information/secure.png'
import help from '../../../assets/desktop/information/help.png'
import location from '../../../assets/desktop/information/location.png'
import profile from '../../../assets/desktop/information/profile.png'

const InformationBar = () => {
  return (
    <div className="top">
      <div className="information">
        <div className="information-flex">
          <Locale />
          <Emblems>
            <Emblem title='secure' src={secure} width='15' link='#' />
            <Emblem title='help' src={help} width='15' link='#' />
            <Emblem title='location' src={location} width='12' link='#' />
            <Emblem title='profile' src={profile} width='15' link='#' />
          </Emblems>
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default InformationBar;
