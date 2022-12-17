import secure from '../../../assets/desktop/information/secure.png'
import help from '../../../assets/desktop/information/help.png'
import location from '../../../assets/desktop/information/location.png'
import profile from '../../../assets/desktop/information/profile.png'
import ImageLink from './ImageLink';

const Emblems = () => {
  return (
    <ul className="emblems">
      <Emblem title='secure' src={secure} width='15' link='#' />
      <Emblem title='help' src={help} width='15' link='#' />
      <Emblem title='location' src={location} width='12' link='#' />
      <Emblem title='profile' src={profile} width='15' link='#' />
    </ul>
  );
};

const Emblem = (props) => {
  return (
    <li className="emblem">
      <ImageLink {...props} />
    </li>
  );
};

export default Emblems;