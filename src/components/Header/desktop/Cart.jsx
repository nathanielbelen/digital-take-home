import PropTypes from 'prop-types';
import ImageLink from '../ImageLink';

// ImageLink = ({ title, link, src, anchorClass, width, height })
const Cart = ({ src, width, isDesktop }) => (
  <div className={isDesktop ? 'cart' : 'cart-mobile'}>
    <ImageLink title="cart" link="#" anchorClass="flex" src={src} width={width} />
    <div className="cart-size">3</div>
  </div>
);

Cart.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  isDesktop: PropTypes.bool,
};

Cart.defaultProps = {
  isDesktop: true,
};

export default Cart;
