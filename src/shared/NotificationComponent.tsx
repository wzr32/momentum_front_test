import { Alert } from "@mui/material";
import * as React from "react";

interface INotificationComponentProps {
  notification: any;
}

const NotificationComponent: React.FC<INotificationComponentProps> = ({
  notification,
}) => {
  return (
    <>
      {notification.show && (
        <Alert severity={notification.severity as any}>
          {notification.msg}
        </Alert>
      )}
    </>
  );
};
export default NotificationComponent;
