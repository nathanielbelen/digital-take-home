import PropTypes from 'prop-types';

const Dropdown = ({ navigation, selectedIndex }) => {
  if (selectedIndex !== null) {
    return (
      <>
        <div className="dropdown">
          <ul className="dropdown-content">
            {navigation[selectedIndex].next.map((destination, index) => (
              <li className="links" key={index}>
                <a href="/">{destination.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mask" />
      </>
    );
  }
};

Dropdown.propTypes = {
  navigation: PropTypes.array.isRequired,
  selectedIndex: PropTypes.number
};

Dropdown.defaultProps = {
  selectedIndex: null,
};

export default Dropdown;
