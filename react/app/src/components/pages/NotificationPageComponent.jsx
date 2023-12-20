import React from 'react';
import NotificationContainer from '../notificationComponent/NotificationComponent';
import LinkComponent from '../linkComponent/LinkComponent';
import '../notificationComponent/NotificationStyle.scss';

const NotificationPageComponent = () => {
  return (
      <div className="notification-page">
        <LinkComponent link="/">На главную</LinkComponent>
        <NotificationContainer />
      </div>
  );
};

export default NotificationPageComponent;
