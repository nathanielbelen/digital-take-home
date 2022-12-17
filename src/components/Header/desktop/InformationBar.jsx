import Emblems from './Emblems';
import Locale from './Locale';
import Cart from './Cart';
import './InformationBar.css'

const InformationBar = () => {
  return (
    <div className="top">
      <div className="information">
        <div className="information-flex">
          <Locale />
          <Emblems />
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default InformationBar;
