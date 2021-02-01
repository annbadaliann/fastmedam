import { Avatar, ClickAwayListener, IconButton, List, ListItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";
import React, {useState} from "react";

import { formatDate } from "../../platform/services/helper";
import useStyles from "./style";


function NotificationItem({ notification, removeNotification }) {
  const {
    notificationTitle,
    notificationDescription,
    notificationDate,
    notificationId,
    isSeen,
  } = notification;

  const [isSettingOpen, setSettingsOpen] = useState(false);

  const classes = useStyles();

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
    
  }

  const handleMarkAsRead = () => {
    // NotificationController.MarkNotificationRead(notificationId);
  }


 
  return (
    <Paper
      className={`${classes.notificationPaper} ${
        !isSeen ? classes.unseenNotifications : ""
      }`}
      elevation={3}
    >
      <div className={classes.notification}>
        <div className={classes.info}>
          <Avatar className={classes.avatar} />
          <div className={classes.textSide}>
            <h4>{notificationTitle}</h4>
            <p>{notificationDescription}</p>
          </div>
        </div>
        <div className={classes.date}>
          <span>{formatDate(notificationDate)}</span>
        </div>

        <ClickAwayListener onClickAway={handleCloseDropdown}>
          <div className={classes.settingsDropdownWrapper}>
            <IconButton onClick={handleOpenDropdown}>
              <MoreVertIcon className={classes.settingsIcon} />
            </IconButton>

            {isSettingOpen && (
              <div className={classes.settingsDropdown}>
                <List>
                  <ListItem className={classes.settingsItem} onClick={handleMarkAsRead}>Mark as Read</ListItem>
                  <ListItem className={classes.settingsItem} onClick={handleRemove}>Remove</ListItem>
                </List>
              </div>
            )}
          </div>
        </ClickAwayListener>
      </div>
    </Paper>
  );
}

export default NotificationItem;
