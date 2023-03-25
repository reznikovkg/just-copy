import { FC, ReactElement } from "react";
import { IButton } from "./interfaces";
import "./style.scss";

export const Button: FC<IButton> = ({ text = "", onClick }): ReactElement => {
  return (
    <button onClick={onClick} className={"button"}>
      {text}
    </button>
  );
};

export default Button;
