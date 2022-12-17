import ImageLink from '../ImageLink';
import logo from '@/assets/desktop/nav/logo.png';
// ImageLink = ({ title, link, src, width, height })

const Logo = ({ width }) => (
  <div className="logo">
    <ImageLink anchorClass="flex" src={logo} title="Lincoln Electric" link="/" width={width} />
  </div>
);

export default Logo;
