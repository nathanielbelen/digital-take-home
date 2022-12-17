const Dropdown = ({ navigation, selectedIndex }) => {
  console.log(navigation);
  return (
    <div className="dropdown">
      <ul className="dropdown-content">
        {navigation[selectedIndex].next.map((destination, index) => {
          return <DropdownLink destination={destination} key={index} />;
        })}
      </ul>
    </div>
  );
};

const DropdownLink = ({ destination }) => {
  return (
    <li className='links'>
      <a className='links'>{destination}</a>
    </li>
  );
};

export default Dropdown;
