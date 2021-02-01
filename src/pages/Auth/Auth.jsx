import React, { useState } from "react";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";

import ResetPassword from "../../pages/Auth/ResetPassword/ResetPassword";
import useGlobal from "../../platform/store";

import useAuthStyles from "./Auth.style";

const LoginRegister = ({changePage}) => {
  const changeTabHandler = (tabName) => setActiveTab(tabName);

  const classes = useAuthStyles();

  const [activeTab, setActiveTab] = useState("sign-in");

  const titles = [
    {
      name: "Sign in",
      activeTitle: "sign-in",
    },
    {
      name: "Sign up",
      activeTitle: "sign-up",
    },
  ];

  return (
    <>
      <div className={classes.authTitles}>
        {titles.map((title) => (
          <h3
            className={`${classes.authTitle} ${(activeTab === title.activeTitle) && classes.activeTab}`}
            onClick={() => changeTabHandler(title.activeTitle)}
            style={{cursor: "pointer"}}
          >
            {title.name}
          </h3>
        ))}
      </div>

      {activeTab === "sign-in" ? (
        <Login/>
      ) : (
        <Register activeTab={activeTab} />
      )}
    </>
  );
};

const Auth = () => {
  const [{authModalStep}] = useGlobal();

  return (
    <div className="auth-modal">
      {authModalStep === 'auth' ? <LoginRegister /> : <ResetPassword /> }
    </div>
  );
};

export default Auth;
