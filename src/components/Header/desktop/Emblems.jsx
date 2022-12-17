import ImageLink from '../ImageLink';

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

export { Emblems, Emblem };