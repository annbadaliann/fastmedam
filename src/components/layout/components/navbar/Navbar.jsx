import React, { useState } from "react";

import { Container, Box, AppBar, Toolbar, IconButton, Drawer} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";

import Languages from "../../../../platform/services/languages";
import Auth from "../../../../pages/Auth/Auth";
import useGlobal from "../../../../platform/store";

import Modal from "../../../modal";

import SelectCity from "./components/SelectCity";
import SelectLanguage from "./components/SelectLanguage";
import AccountSettings from "./components/AccountSettings";
import NotificationsDropdown from "./components/NotificationsDropdown";
import Sidebar from "./sidebar/Sidebar";

import { useNavStyles } from "./Navbar.style";

const {
  modal_actions: { log_out },
} = Languages.Translations;

const NavBar = () => {
  const [{isAuthModalOpen}, {setAuthModal}] = useGlobal();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [{isAuthenticated}] = useGlobal();
  const classes = useNavStyles();

  const openAuthModal = () => {
    setAuthModal(true);
  };

  const closeAuthModal = () => {
    setAuthModal(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <AppBar component="nav" position="fixed" className={classes.navWrapper}>
        <Container maxWidth="xl">
          <Toolbar className={classes.navbar} disableGutters={true}>
            <Box display="flex" alignItems="center">
              <IconButton className={classes.iconButton} onClick={openSidebar}>
                <MenuIcon classes={{ root: classes.menuIcon }} />
              </IconButton>
              <SelectCity />
            </Box>
            <Box display="flex" alignItems="center">
              <SelectLanguage />
              {isAuthenticated ? (
                <>
                  <NotificationsDropdown />
                  <AccountSettings />
                </>
              ) : (
                <IconButton
                  onClick={openAuthModal}
                  className={classes.iconButton}
                >
                  <PermIdentityOutlinedIcon className={classes.userIcon} />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
        <Drawer open={isSidebarOpen} anchor="left" onClose={closeSidebar}>
          <Sidebar close={closeSidebar}/>
        </Drawer>
      <Modal isOpen={isAuthModalOpen} close={closeAuthModal}>
        <Auth />
      </Modal>
    </>
  );
};

export default NavBar;
