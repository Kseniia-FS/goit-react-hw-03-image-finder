import ImagesGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onSelect }) => {
  return (
    <ul className={s.ImageGallery}>
      {images &&
        images.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImagesGalleryItem
              key={id}
              webformatURL={webformatURL}
              tag={tags}
              onSelect={() => onSelect(largeImageURL)}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
