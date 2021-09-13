import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import fetchImages from "./ApiService/fetchImages";
import { toast } from "react-toastify";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGalerry from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
import LoaderIcon from "./components/Loader/Loader";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    query: "",
    selectedImage: null,
    images: [],
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.getImages();
    }
  }
  toggleLoading = () => {
    this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
  };

  handleSubmit = (query) => {
    this.setState({ query: query, images: [], page: 1 });
  };

  handleSelectedImage = (imageUrl) => {
    this.setState({ selectedImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };
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

  getImages = () => {
    this.toggleLoading();
    const { page, query } = this.state;

    fetchImages(query, page)
      .then((data) => {
        if (data.hits.length === 0) {
          toast.error(`Ooops, we cant't find such query! Try again.`);
          return;
        }

        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
        }));
      })
      .then(this.handleScroll)
      .catch((error) => console.log(error.message))
      .finally(this.toggleLoading);
  };

  render() {
    const { selectedImage, images, isLoading, page } = this.state;
    console.log(page);
    const notLastPage = images.length / page === 12;
    const showBtn = images.length > 0 && notLastPage;
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGalerry images={images} onSelect={this.handleSelectedImage} />
        {selectedImage && (
          <Modal src={selectedImage} closeModal={this.handleCloseModal} />
        )}
        {isLoading && <LoaderIcon />}
        {showBtn && <Button handleClick={this.handleClick} />}

        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
