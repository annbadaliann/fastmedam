import React from "react";
import { makeStyles } from "@material-ui/core";
import Auth from "../../pages/Auth/Auth";
import Modal from '../../components/modal'
import useGlobal from "../../platform/store";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  text: {
    fontSize: "18px",
  },
  auth: {
    color: "#92d365",
    cursor: "pointer"
  },
}));

const NeedToLogin = ({ name }) => {
  const classes = useStyles();

  const [{isAuthModalOpen}, {setAuthModal}] = useGlobal();
  
  const openAuthModal = () => {
    setAuthModal(true);
  };

  const closeAuthModal = () => {
    setAuthModal(false);
  };
  return (
    <>
    <div className={classes.wrapper}>
      <p className={classes.text}>
        To have '{name}' list you need to{" "}
        <span onClick={openAuthModal} className={classes.auth}>login or register</span>.
      </p>
    </div>
    <Modal isOpen={isAuthModalOpen} close={closeAuthModal}>
        <Auth />
      </Modal>
    </>
  );
};

export default NeedToLogin;
