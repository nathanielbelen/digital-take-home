import ImageLink from './../ImageLink';

const Emblems = ({ children }) => {
  return (
    <ul className="emblems">
      {children}
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

export { Emblems, Emblem };