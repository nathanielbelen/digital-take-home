import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const Dropdown = ({ navigation, selectedIndex, setSelectedIndex }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSelectedIndex(null);
      }
    }
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  });

  if (selectedIndex !== null) {
    return (
      <>
        <div ref={wrapperRef} className="dropdown">
          <ul className="dropdown-content">
            {navigation[selectedIndex].next
              && navigation[selectedIndex].next.map((destination, index) => (
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
  selectedIndex: PropTypes.number,
};

Dropdown.defaultProps = {
  selectedIndex: null,
};

export default Dropdown;
