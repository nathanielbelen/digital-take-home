import PropTypes from 'prop-types';
import ImageLink from './ImageLink';

const Emblems = ({ children }) => (
  <ul className="emblems">
    {children}
  </ul>
);

const Emblem = (props) => (
  <li className="emblem">
    <ImageLink {...props} />
  </li>
);

Emblems.propTypes = {
  children: PropTypes.array.isRequired,
};

export { Emblems, Emblem };
