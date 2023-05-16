import sty from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types'; 

export const ImageGalleryItem = ({ images, togleModal }) => {
  return (
    <>
      {images.map(item => (

        <li key={item.id} onClick={(evt)=>{togleModal(item.largeImageURL, item.tags);}} className={sty.galleryItem}>
          <img
            loading="lazy"
            className={sty.ImageGalleryItem}
            src={item.webformatURL}
            alt={item.tags}
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};