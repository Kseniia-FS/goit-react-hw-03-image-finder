import { Component } from "react";
import s from "./ImageGalleryItem.module.css";

class ImagesGalleryItem extends Component {
  render() {
    const { src, tag } = this.props;
    return <img src={src} alt={tag} className={s.ImageGalleryItemImage} />;
  }
}

export default ImagesGalleryItem;
