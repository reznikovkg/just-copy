import React, { useEffect } from "react";
import Button from "../Button/Button";
import { INotification } from "./interfaces";

import "./style.scss";

const Notification: React.FC<INotification> = (props) => {
  const { destroy, content, title, duration = 1000, id } = props;

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      destroy();
    }, duration);

    return () => clearTimeout(timer);
  }, [destroy, duration]);

  return (
    <div>
      <div className={"notification-header"}>
        <div>
          {title} {id}
        </div>
        <Button onClick={destroy} text={"X"} />
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Notification;
