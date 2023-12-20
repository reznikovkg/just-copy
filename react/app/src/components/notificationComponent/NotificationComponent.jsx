import React, { useState } from 'react';
import './NotificationStyle.scss';

const NotificationContainer = () => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = () => {
    const newNotification = {
      id: Date.now(),
      content: (
          <div key={Date.now()} className="notification">
            <div className="notification-group">
              <h2 className="notification-header">Заголовок</h2>
              <div className="notification-content">Описание</div>
              <span className="close-button" onClick={() => removeNotification(newNotification)}>
              &#10006;
            </span>
            </div>
          </div>
      ),
    };

    setNotifications([...notifications, newNotification]);

    setTimeout(() => {
      removeNotification(newNotification);
    }, 3000);
  };

  const removeNotification = (notificationToRemove) => {
    setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== notificationToRemove.id)
    );
  };

  return (
      <div className="notification-container">
        <button className="show-notification" onClick={showNotification}>
          Показать уведомление
        </button>
        <div className="notification-list">
          {notifications.map((item) => (
              <React.Fragment key={item.id}>{item.content}</React.Fragment>
          ))}
        </div>
      </div>
  );
};

export default NotificationContainer;
