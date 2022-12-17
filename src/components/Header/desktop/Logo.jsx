import PropTypes from 'prop-types';
import ImageLink from '../ImageLink';
import logo from '@/assets/desktop/nav/logo.png';
// ImageLink = ({ title, link, src, width, height })

const Logo = ({ width }) => (
  <div className="logo">
    <ImageLink anchorClass="flex" src={logo} title="Lincoln Electric" link="/" width={width} />
  </div>
);

Logo.propTypes = {
  width: PropTypes.string.isRequired,
};

export default Logo;
