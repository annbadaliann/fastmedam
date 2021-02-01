import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SettingsIcon from "@material-ui/icons/Settings";

import { useNavStyles } from "../Navbar.style";

import ConfirmationModal from "../../../../../popups/ConfirmationModal/ConfirmationModal";
import Modal from "../../../../modal";
import useGlobal from "../../../../../platform/store";

function AccountSettings() {
  const [{ userDetails }, { logout }] = useGlobal();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const classes = useNavStyles();
  const history = useHistory();

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onLogoutHandle = () => {
    logout();
    history.push('/home')
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClose}>
        <div className={classes.avatarWrapper}>
          <div className={classes.userInfo} onClick={handleOpen}>
            <Avatar className={classes.avatar} alt="user icon" />
            <p className={classes.userName}>
              {" "}
              {`${userDetails && userDetails?.firstName} ${
                userDetails && userDetails?.lastName
              }`}
            </p>
          </div>

          {isOpen && (
            <div className={classes.menu}>
              <List disablePadding={true}>
                <ListItem
                  className={classes.menuItem}
                  to="/account"
                  component={Link}
                  onClick={handleClose}
                >
                  <SettingsIcon />
                  Account settings
                </ListItem>
                <ListItem
                  className={classes.menuItem}
                  onClick={openLogoutModal}
                >
                  <PowerSettingsNewIcon />
                  Log out
                </ListItem>
              </List>
            </div>
          )}
        </div>
      </ClickAwayListener>
      <Modal isOpen={isLogoutModalOpen} close={closeLogoutModal}>
        <ConfirmationModal
          description="Are you sure you want to log out?"
          cancel={closeLogoutModal}
          confirm={onLogoutHandle}
        />
      </Modal>
    </>
  );
}

export default AccountSettings;