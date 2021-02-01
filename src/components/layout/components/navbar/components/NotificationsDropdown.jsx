import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

import {
  ClickAwayListener,
  Button,
  List,
  ListItem,
  ListItemText,
  Badge,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import useGlobal from "../../../../../platform/store";
import { formatDate } from "../../../../../platform/services/helper";

import NotificationController from "../../../../../platform/api/notifications";

import {
  Title,
  NotificationTitle,
  NotificationDate,
  NotificationDescription,
  SettingsIcon,
  BadgeIcon,
  DropwdownWrapper,
} from "./Notifications.style";

const useNotificationStyles = makeStyles(() => ({
  notificationIcon: {
    color: "#4e4e4e",
    cursor: "pointer",
  },
  dropdown: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "8px",
    right: "-15px",
    top: "35px",
    zIndex: 1,
    width: "280px",
    boxShadow: "0 10px 28px 0 rgba(95, 109, 124, 0.3)",

    "&:before": {
      content: "''",
      position: "absolute",
      top: "-8px",
      right: "15px",
      borderRight: "8px solid transparent",
      borderBottom: "8px solid #efefef",
      borderLeft: "8px solid transparent",
    },
  },
  dropdownHeader: {
    backgroundColor: "#efefef",
    padding: "10px 17px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },

  notificationsList: {
    height: "150px",
    overflow: "auto",
    position: "relative",
  },
 

  buttonContainer: {
    padding: "10px 17px",
  },
  button: {
    backgroundColor: "#7ac943",
    color: "white",
    fontSize: "13px",
    lineHeight: "18px",
    textTransform: "unset",

    "&:hover": {
      backgroundColor: "#7ac943",
      opacity: "90%",
    },
  },
  noList: {
    color: "#3e3d3d",
    textAlign: "center",
    padding: "25px 0",
    fontSize: "14px",
  },

  settingsItem: {
    color: "#4c4c4c",
    fontSize: "12px",
    paddingTop: "3px",
    paddingBottom: "3px",
    cursor: "pointer",
    transform: "transition all .3s",

    "&:hover": {
      backgroundColor: "#f7f7f7",
    },
  },
}));

const notificationsData = [
  {
    notificationId: 1,
    notificationTitle: "notification 1",
    notificationDescription: "hello world",
    isSeen: false,
  },
  {
    notificationId: 2,
    notificationTitle: "notification 2",
    notificationDescription: "hello world",
    isSeen: false,
  },
  {
    notificationId: 3,
    notificationTitle: "notification 3",
    notificationDescription: "hello world",
    isSeen: false,
  },
  {
    notificationId: 4,
    notificationTitle: "notification 4",
    notificationDescription: "hello world",
    isSeen: false,
  },
  {
    notificationId: 5,
    notificationTitle: "notification 5",
    notificationDescription: "hello world",
    isSeen: false,
  },
  {
    notificationId: 6,
    notificationTitle: "notification 6",
    notificationDescription: "hello world",
    isSeen: false,
  },
  {
    notificationId: 7,
    notificationTitle: "notification 7",
    notificationDescription: "hello world",
    isSeen: false,
  },
];

function NotificationItem({ item, removeNotification }) {
  const {
    notificationId,
    notificationDate,
    notificationTitle,
    notificationDescription,
  } = item;
  const classes = useNotificationStyles();

  const [isSettingOpen, setSettingsOpen] = useState(false);

  const handleOpenDropdown = () => {
    console.log("fgfg");
    setSettingsOpen(true);
  };

  const handleCloseDropdown = () => {
    setSettingsOpen(false);
  };

  const handleRemove = () => {
    removeNotification(notificationId);
    setSettingsOpen(false);
  };

  const handleMarkAsRead = () => {
    NotificationController.MarkNotificationRead(notificationId);
  };

  return (
    <ListItem key={nanoid()}>
      <ListItemText>
        <ClickAwayListener onClickAway={handleCloseDropdown}>
          <DropwdownWrapper>
            <IconButton onClick={handleOpenDropdown}>
              <SettingsIcon />
            </IconButton>

            {isSettingOpen && (
              // <Dropdown>
                <List>
                  <ListItem
                    className={classes.settingsItem}
                    onClick={handleMarkAsRead}
                  >
                    Mark as Read
                  </ListItem>
                  <ListItem
                    className={classes.settingsItem}
                    onClick={handleRemove}
                  >
                    Remove
                  </ListItem>
                </List>
              // </Dropdown>
            )}
          </DropwdownWrapper>
        </ClickAwayListener>

        <NotificationDate>{formatDate(notificationDate)}</NotificationDate>
        <NotificationTitle>{notificationTitle}</NotificationTitle>
        <NotificationDescription>
          {notificationDescription}
        </NotificationDescription>
      </ListItemText>
    </ListItem>
  );
}

function NotificationsDropdown() {
  const [isOpen, setOpen] = useState(false);
  const [notificationsCount, setNotificationsCount] = useState();
  const [notifications, setNotifications] = useState([]);
  const [{}, { getNotifications }] = useGlobal();

  const classes = useNotificationStyles();

  const getNotificationsCount = async () => {
    const response = await NotificationController.GetNotificationsCount();
    response.data = notificationsData.length;
    setNotificationsCount(response.data);
  };

  const fetchNotifications = () => {
    const body = {
      count: 3,
      page: 1,
    };

    getNotifications(body).then((response) => {
      if (response && response.success) {
        response.data.data = notificationsData;
        setNotifications(response.data.data);
      }
    });
  };

  useEffect(() => {
    getNotificationsCount();
    fetchNotifications();
    return () => {
      setNotifications([]);
      setNotificationsCount(0);
    };
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

      console.log(filteredNotifications);

      setNotifications(filteredNotifications);
      // fetchNotifications();
      // getNotificationsCount();
    }

    NotificationController.RemoveNotification(
      notificationId
    ).then((response) => {});
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Badge badgeContent={notificationsCount}>
        <NotificationsNoneIcon
          className={classes.notificationIcon}
          onClick={handleOpen}
        />

        {isOpen && (
          <div className={classes.dropdown}>
            <div className={classes.dropdownHeader}>
              <Title>Notifications</Title>
            </div>
            {notificationsCount ? (
              <>
                <List disablePadding className={classes.notificationsList}>
                  {notifications.map((item) => (
                    <NotificationItem
                      item={item}
                      removeNotification={removeNotification}
                    />
                  ))}
                </List>

                <div className={classes.buttonContainer}>
                  <Button
                    fullWidth
                    className={classes.button}
                    component={Link}
                    to="/notifications"
                    onClick={handleClose}
                  >
                    See all
                  </Button>
                </div>
              </>
            ) : (
              <p className={classes.noList}>You don't have any notifications</p>
            )}
          </div>
        )}
      </Badge>
    </ClickAwayListener>
  );
}

export default NotificationsDropdown;
