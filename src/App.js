import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGalerry from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    query: "",
    selectedImage: null,
  };

  handleSubmit = (query) => {
    this.setState({ query });
  };

  handleSelectedImage = (imageUrl) => {
    this.setState({ selectedImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { query, selectedImage } = this.state;
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGalerry query={query} onSelect={this.handleSelectedImage} />
        {selectedImage && (
          <Modal src={selectedImage} closeModal={this.handleCloseModal} />
        )}

        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
