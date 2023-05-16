import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'; 
import PropTypes from 'prop-types'; 
import sty from './ImageGallery.module.css'; 

export const ImageGallery = ({ images, togleModal }) => {
  return (
    <>
      <ul className={sty.gallery}>
        <ImageGalleryItem togleModal={togleModal} images={images} />
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired, 
  togleModal: PropTypes.func.isRequired 
};