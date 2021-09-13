import Image from "../Image/image";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ tag, id, webformatURL, onSelect }) => {
  return (
    <li key={id} onClick={onSelect} className={s.ImageGalleryItem}>
      <Image src={webformatURL} tag={tag} />
    </li>
  );
};

export default ImageGalleryItem;
