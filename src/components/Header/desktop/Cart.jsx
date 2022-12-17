import ImageLink from "../ImageLink";

// ImageLink = ({ title, link, src, anchorClass, width, height })
const Cart = ({ src, width, isDesktop }) => {
  return (<div className={isDesktop ? 'cart' : 'cart-mobile'}>
    <ImageLink title='cart' link='#' anchorClass='flex' src={src} width={width} />
    <div className='cart-size'>3</div>
  </div>);
}

export default Cart;