import s from "./Button.module.css";

const Button = ({ handleClick }) => {
  return (
    <div className={s.wrapper}>
      <button className={s.Button} type="button" onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
