import { Component } from "react";
import ImagesGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";
import fetchImages from "../../ApiService/fetchImages";
import Button from "../Button/Button";
import LoaderIcon from "../Loader/Loader";

class ImageGalerry extends Component {
  state = {
    images: [],
    page: 1,
    status: "idle",
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery) {
      this.setState({ status: "pending" });
      fetchImages(nextQuery, nextPage).then((data) =>
        this.setState({
          images: data.hits,
        })
      );
      this.setState({ status: "resolved", page: 1 });
    }

    if (prevPage !== nextPage) {
      fetchImages(nextQuery, nextPage)
        .then((data) =>
          this.setState((prevState) => ({
            images: [...prevState.images, ...data.hits],
          }))
        )
        .then(this.handleScroll);
    }
  }
  handleClick = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { images, status } = this.state;
    const { onSelect } = this.props;

    if (status === "idle") {
      return <></>;
    }

    if (status === "pending") {
      return <LoaderIcon />;
    }

    if (status === "resolved") {
      return (
        <>
          <ul className={s.ImageGallery}>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => {
              return (
                <li
                  key={id}
                  className="ImageGalleryItem"
                  onClick={() => onSelect(largeImageURL)}
                >
                  <ImagesGalleryItem src={webformatURL} tag={tags} />
                </li>
              );
            })}
          </ul>
          {images.length >= 12 && (
            <Button handleClick={() => this.handleClick} />
          )}
        </>
      );
    }
  }
}

export default ImageGalerry;
