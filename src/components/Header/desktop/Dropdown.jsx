const Dropdown = ({ navigation, selectedIndex }) => {
  return (
    <div className="dropdown">
      <ul className="dropdown-content">
        {navigation[selectedIndex].next.map((destination, index) => {
          return (
            <li className="links" key={index}>
              <a>{destination.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
