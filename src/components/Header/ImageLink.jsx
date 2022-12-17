const ImageLink = ({
  title, link, src, width, height, onClick, anchorClass,
}) => (
  <a href={link} className={anchorClass} onClick={onClick}>
    <img src={src} width={width} height={height} alt={title} />
  </a>
);

export default ImageLink;
