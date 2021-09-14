import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ tag, webformatURL, onSelect }) => {
  return (
    <li onClick={onSelect} className={s.ImageGalleryItem}>
      <img src={webformatURL} alt={tag} className={s.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
