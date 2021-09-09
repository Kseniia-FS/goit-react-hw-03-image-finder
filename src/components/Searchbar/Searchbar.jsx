import React, { Component } from "react";
import s from "./Searchbar.module.css";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

class Searchbar extends Component {
  state = {
    value: "",
  };

  handleInputChange = (e) => {
    this.setState({ value: e.currentTarget.value });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();

    const { value } = this.state;
    if (value.trim() === "") {
      toast.error("Write correct query");
      return;
    }
    this.props.handleSubmit(value);
    this.setState({ value: "" });
    this.clearInput(e);
  };

  clearInput = (e) => {
    e.currentTarget.input.value = "";
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleOnSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            id="input"
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
