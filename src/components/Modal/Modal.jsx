import React, { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import Image from "../Image/image";

const modalRoot = document.querySelector("#modal");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModal);
  }

  handleBackDropClick = (e) => {
    const { closeModal } = this.props;
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  handleCloseModal = (e) => {
    const { closeModal } = this.props;

    if (e.code === "Escape") {
      closeModal();
    }
  };

  render() {
    const { src } = this.props;

    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackDropClick}>
        <div className={s.Modal}>
          <Image src={src} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
