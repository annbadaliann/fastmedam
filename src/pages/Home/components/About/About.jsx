import React from "react";

import { Container } from "@material-ui/core";

import Languages from "../../../../platform/services/languages";
import logo from "../../../../assets/images/logoGreen.jpg";

import useStyles from "./About.style.js";

const {
  about_us: { title, description },
} = Languages.Translations;

function About() {
  const classes = useStyles();

  return (
    <section className={classes.aboutSection}>
      <Container maxWidth="lg">
          <h2 className="G-title">{title}</h2>

          <div className={classes.aboutContent}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
            </div>
            <p className={classes.description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ipsam voluptatum minus, error velit consequuntur perferendis, animi itaque dicta numquam corrupti quidem.
              Est esse quo illum similique laborum vitae nemo ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Et nisi fuga explicabo atque consequuntur, sed quo aliquid id. Iusto culpa illum accusamus molestiae provident 
              consectetur reprehenderit quidem repellat explicabo inventore?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ipsam voluptatum minus, error velit consequuntur perferendis, animi itaque dicta numquam corrupti quidem. 
              Est esse quo illum similique laborum vitae nemo ipsam!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ipsam voluptatum minus, error velit consequuntur perferendis, animi itaque dicta numquam corrupti quidem. 
              Est esse quo illum similique laborum vitae nemo ipsam!
             </p>
          </div>
      </Container>
    </section>
  );
}

export default About;
