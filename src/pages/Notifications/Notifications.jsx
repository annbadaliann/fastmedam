import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";

import NotificationItem from "./NotificationItem";
import notificationIcon from "../../assets/icons/notifications.png";
import useStyles from "./style";
import useGlobal from "../../platform/store";
import BusyWrapper from "../../components/BusyWrapper/BusyWrapper";
import NeedToLogin from "../../components/NeedToLogin";
import Empty from "../../components/Empty/Empty";
import NotificationController from "../../platform/api/notifications";

const notificationsData = [
  {
    notificationId: 1,
    notificationTitle: 'notification 1',
    notificationDescription: 'hello world',
    notificationDate: "034304304",
    isSeen: false,
  },
  {
    notificationId: 2,
    notificationTitle: 'notification 2',
    notificationDescription: 'hello world',
    isSeen: false,
  },
  {
    notificationId: 3,
    notificationTitle: 'notification 3',
    notificationDescription: 'hello world',
    isSeen: false,
  },
  {
    notificationId: 4,
    notificationTitle: 'notification 4',
    notificationDescription: 'hello world',
    isSeen: false,
  },
  {
    notificationId: 5,
    notificationTitle: 'notification 5',
    notificationDescription: 'hello world',
    isSeen: false,
  },
  {
    notificationId: 6,
    notificationTitle: 'notification 6',
    notificationDescription: 'hello world',
    isSeen: false,
  },
  {
    notificationId: 7,
    notificationTitle: 'notification 7',
    notificationDescription: 'hello world',
    isSeen: false,
  },
]

const Notifications = () => {
  const [{ isAuthenticated }, { getNotifications }] = useGlobal();
  const [notifications, setNotifications] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const [itemCount, setItemCount] = useState();
  const [isLoading, setIsLoading] = useState(true);


  const classes = useStyles();

  const fetchNotifications = async () => {
    const body = {
      count: 4,
      page: activePage,
    };

    getNotifications(body).then((response) => {
      response.data.data = notificationsData;
      if(response) {
        setIsLoading(false);
        setNotifications(response.data.data);
        setPageCount(response.data.pageCount);
        setItemCount(response.data.itemCount);
      }

    });
  };

  const removeNotification = async (notificationId) => {

    // todo remove this line of code

    const response = {
      success: true,
    };

    if (response && response.success) {
      const filteredNotifications = notifications.filter((item) => {
        return item.notificationId !== notificationId;
      });

      console.log(filteredNotifications)

      setNotifications(filteredNotifications);
      // fetchNotifications();
      // getNotificationsCount();
    }

    NotificationController.RemoveNotification(notificationId).then((response) => {
     
    });
  };


  useEffect(() => {
    fetchNotifications();
  }, [activePage]);

  const handleChange = (event, value) => {
    setActivePage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isAuthenticated ? (
        <BusyWrapper isBusy={isLoading}>
          <div className="G-box-wrapper pt-100">
            <Container maxWidth="lg">
              <div>
                <div className={classes.header}>
                  <h3>All notifications</h3>
                </div>
                <div className={classes.notificationsList}>
                  {notifications.length ?  notifications.map((item) => (
                    <NotificationItem notification={item} key={item.id} removeNotification={removeNotification} />
                  )) :  <div style={{marginTop: "100px"}}><Empty name="notification list" icon={notificationIcon} /></div>}
                </div>

                {itemCount > 5 && (
                  <Pagination
                    className={classes.pagination}
                    count={pageCount}
                    page={activePage}
                    showFirstButton
                    showLastButton
                    onChange={handleChange}
                  />
                )}
              </div>
            </Container>
          </div>
        </BusyWrapper>
      ) : (
        <NeedToLogin name="notifications" />
      )}
    </>
  );
};

export default Notifications;
