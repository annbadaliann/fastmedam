import React from "react";

import { Container } from "@material-ui/core";

import Languages from "../../../../platform/services/languages";

import useStyles from "./Footer.style";

import { socialMediaItems } from "./constants";

const { all_rights_reserved } = Languages.Translations;

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl">
        <div className={classes.content}>
          <p>© {all_rights_reserved}</p>

          <div className={classes.contact}>
            <a href="tel:+37444000089" className={classes.phoneNumber}>
              +37444000089
            </a>

            <div className={classes.socialMediaIcons}>
              {socialMediaItems.map((item) => (
                <a href={item.link} target="_blank" key={item.name}>
                  <img src={item.icon} alt={item.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
