import ImageLink from "./ImageLink";
import cart from '../../../assets/desktop/information/cart.png'

// ImageLink = ({ title, link, src, anchorClass, width, height })
const Cart = () => {
  return (<div className='cart'>
    <ImageLink title='cart' link='#' anchorClass='flex' src={cart} width='16' />
    <div className='cart-size'>3</div>
  </div>);
}

export default Cart;