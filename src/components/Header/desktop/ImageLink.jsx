const ImageLink = ({ title, link, src, anchorClass, width, height }) => {
  return (
    <a href={link} className='flex'>
      <img src={src} width={width} height={height} alt={title} />
    </a>
  )
}

export default ImageLink;