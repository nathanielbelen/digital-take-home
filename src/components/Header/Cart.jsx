import PropTypes from 'prop-types';

const Cart = ({ src, width, isDesktop }) => (
  <button type="button" className={isDesktop ? 'cart' : 'cart-mobile'}>
    <div className="flex">
      <img src={src} width={width} alt="cart" />
    </div>
    <div className="cart-size">3</div>
  </button>
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
