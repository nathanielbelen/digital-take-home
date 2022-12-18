import PropTypes from 'prop-types';

const ImageLink = ({
  title, link, src, width, height, onClick, anchorClass,
}) => (
  <a href={link} className={anchorClass} onClick={onClick}>
    <img src={src} width={width} height={height} alt={title} />
  </a>
);

ImageLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  anchorClass: PropTypes.string,
};

ImageLink.defaultProps = {
  link: undefined,
  width: undefined,
  height: undefined,
  onClick: undefined,
  anchorClass: undefined,
}
export default ImageLink;
