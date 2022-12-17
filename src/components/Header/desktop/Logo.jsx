import ImageLink from "./ImageLink";
import logo from '../../../assets/desktop/nav/logo.png'
// ImageLink = ({ title, link, src, width, height })

const Logo = () => {
  return (
    <div className='logo'>
      <ImageLink src={logo} title='Lincoln Electric' link='#' width='115'/>
    </div>
  )
}

export default Logo;