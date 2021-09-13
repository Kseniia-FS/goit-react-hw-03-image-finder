import s from "./Image.module.css";
const Image = ({ src, tag }) => {
  return <img src={src} alt={tag} className={s.ImageGalleryItemImage} />;
};

export default Image;
