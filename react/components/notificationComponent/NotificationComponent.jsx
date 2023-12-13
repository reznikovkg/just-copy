import React from 'react';
import './NotificationStyle.scss';

const Notification = ({ title, description, onClose }) => {
  return (
      <div className="notification">
        <div className="notification-group">
          <h2 className="notification-header">{title}</h2>
          <div className="notification-content">{description}</div>
          <span className="close-button" onClick={onClose}>&#10006;</span>
        </div>
      </div>
  );
};

export default Notification;
