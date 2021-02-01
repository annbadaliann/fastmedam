import Connection from "../services/connection";

const controllerName = "Notification";

class NotificationController {
  static GetNotifications = (body) => {
    const result = Connection.POST(controllerName, "GetPersonNotifications", body);
    return result;
  };

  static GetNotificationsCount = () => {
    const result = Connection.GET(controllerName, "UnSeenCount");
    return result;
  };

  static MarkNotificationRead = (query) => {
    const result = Connection.PUT(controllerName, `Seen/${query}`);
    return result;
  };

  static RemoveNotification = (query) => {
    const result = Connection.DELETE(controllerName, `Remove/${query}`);
    return result;
  };
}

export default NotificationController;
