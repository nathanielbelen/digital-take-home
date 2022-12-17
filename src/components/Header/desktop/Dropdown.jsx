import PropTypes from 'prop-types';

const Dropdown = ({ navigation, selectedIndex }) => (
  <div className="dropdown">
    <ul className="dropdown-content">
      {navigation[selectedIndex].next.map((destination, index) => (
        <li className="links" key={index}>
          <a>{destination.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

Dropdown.propTypes = {
  navigation: PropTypes.array.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};

export default Dropdown;
