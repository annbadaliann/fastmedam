import React from "react";

import About from "./components/About";
import PersonalInfo from "./components/PersonalInfo";
import ChangePassword from "./components/ChangePassword";
import { Container } from "@material-ui/core";
import useStyles from "./Account.style";

const Account = () => {
  const classes = useStyles();

  return (
    <div className="pt-50">
      <About />
      <section className={classes.formsSection}>
        <Container>
           <PersonalInfo />
          <ChangePassword /> 
        </Container>
      </section>
    </div>
  );
};

export default Account;
