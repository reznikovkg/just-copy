import { FC, ReactElement, useState } from "react";
import Button from "../Button/Button";
import { IProgressBar } from "./interfaces";

import "./style.scss";

export const ProgressBar: FC<IProgressBar> = ({ step = 10 }): ReactElement => {
  const [width, setWidth] = useState<number>(step);
  const [backgroundColor, setBackgroundColor] = useState<string>("dodgerblue");
  const increment = () => {
    setWidth((width) => (width + step < 100 ? width + step : 100));
    updateColor();
  };

  const decrement = () => {
    setWidth((width) => (width - step > 0 ? width - step : 0));
    updateColor();
  };

  const updateColor = () => {
    if (width > 75) {
      setBackgroundColor("gold");
    } else if (width > 50) {
      setBackgroundColor("orangered");
    } else if (width > 25) {
      setBackgroundColor("yellowgreen");
    }
  };
  return (
    <div className="container container--progress">
      <div className="progress">
        <div
          className="progress__bar"
          style={{ width: width + "%", backgroundColor: backgroundColor }}
        >
          {`${width}%`}
        </div>
      </div>
      <div className="button_container">
        <Button onClick={increment} text={`+${step}%`} />
        <Button onClick={decrement} text={`-${step}%`} />
      </div>
    </div>
  );
};

export default ProgressBar;
