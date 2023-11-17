import { FC, ReactElement } from "react";
import { IButton } from "./interfaces";
import "./style.scss";

export const Button: FC<IButton> = ({ disabled = false, text = "", onClick}): ReactElement => {
  return (
    <button onClick={onClick} className={"btn"} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
