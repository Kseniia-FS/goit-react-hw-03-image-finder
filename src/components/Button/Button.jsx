import { Component } from "react";
import s from "./Button.module.css";

class Button extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div className={s.wrapper}>
        <button className={s.Button} type="button" onClick={handleClick()}>
          Load more
        </button>
      </div>
    );
  }
}

export default Button;
