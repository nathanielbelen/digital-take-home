import PropTypes from 'prop-types';
import chevron from '@/assets/mobile/nav/menu/chevron.png';

class Visit {
  constructor(val, prev) {
    this.val = val;
    this.prev = prev || null;
  }
}

const MenuItem = ({
  setCurrentBack,
  setCurrentNav,
  currentNav,
  currentBack,
  index,
  destination,
}) => {
  const handleClick = () => {
    setCurrentBack(new Visit(currentNav, currentBack));
    setCurrentNav(currentNav[index].next);
  };
  if (destination.next) {
    return (
      <button
        type="button"
        className={`menu-item button ${!currentBack && 'base'}`}
        key={index}
        onClick={handleClick}
      >
        <div>{destination.name}</div>
        <img src={chevron} width="10" alt={destination.name} />
      </button>
    );
  }
  if (destination.url) {
    return (
      <a
        href={destination.url}
        className={`menu-item link ${!currentBack && 'base'}`}
        key={index}
      >
        <div>{destination.name}</div>
        <img src={chevron} width="10" alt={destination.name} />
      </a>
    );
  }
};

MenuItem.propTypes = {
  setCurrentBack: PropTypes.func.isRequired,
  setCurrentNav: PropTypes.func.isRequired,
  currentNav: PropTypes.array,
  currentBack: PropTypes.object,
  index: PropTypes.number.isRequired,
  destination: PropTypes.object.isRequired,
};

MenuItem.defaultProps = {
  currentNav: null,
  currentBack: null,
};

export default MenuItem;
