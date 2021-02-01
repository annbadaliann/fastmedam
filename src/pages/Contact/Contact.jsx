import React, { useState } from "react";
import contactUs from "../../assets/icons/ic_contact_us.png";

import fbIcon from "../../assets/icons/facebook_icon.png";
import skypeIcon from "../../assets/icons/skype_icon.png";
import okIcon from "../../assets/icons/ok_icon.png";
import vkIcon from "../../assets/icons/ic_vk.png";
import igIcon from "../../assets/icons/ic_instagram.png";

import InputField from "../../components/InputField/InputField";
import useStyles from "./Contact.style";
import { Container } from "@material-ui/core";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = form;

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const classes = useStyles();

  const changeHandler = (e) => {
    const newState = { ...form, [e.target.name]: e.target.value };
    setForm(newState);
  };

  const submit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if(name, email, message) {
      setIsLoading(true);
    }
    // TODO send data to server
  };

  const socialMediaLinks = [
    {
      icon: fbIcon,
      link: "https://www.facebook.com/Fastmed.am/",
      name: "facebook",
    },
    {
      icon: skypeIcon,
      link: "#",
      name: "skype",
    },
    {
      icon: okIcon,
      link: "#",
      name: "odnoklassniki",
    },
    {
      icon: vkIcon,
      link: "#",
      name: "vkontakte",
    },
    {
      icon: igIcon,
      link: "https://www.instagram.com/fastmed.am/",
      name: "instagram",
    },
  ];

  return (
    <div style={{ backgroundColor: "rgba(247, 247, 247)" }}>
      <Container maxWidth="lg">
        <div className={classes.wrapper}>
          <div className={classes.contactContent}>
        

            <div className={classes.contactForm}>
              <form className={classes.form}>
                <h2>Contact us</h2>
                <InputField
                  label="Name"
                  name="name"
                  value={name}
                  change={changeHandler}
                  submitted={isSubmitted}
                  field="name"
                />
                <InputField
                  label="Email address"
                  name="email"
                  value={email}
                  change={changeHandler}
                  submitted={isSubmitted}
                  helperText="Email address must be valid"
                />
                <div style={{ marginTop: "30px" }}>
                  <label htmlFor="textarea">Message</label>
                  <textarea
                    id="textarea"
                    name="message"
                    value={message}
                    onChange={changeHandler}
                    className={classes.message}
                  ></textarea>
                  <ButtonLoader
                    className={classes.button}
                    fullWidth
                    isLoading={isLoading}
                    clickHandler={submit}
                  >
                    SEND
                  </ButtonLoader>
                </div>
              </form>
            </div>
          
            <div className={classes.contactInfo}>
              <p>24 hours</p>
              <h3>+37444000089</h3>
              <a href="tel:37444000089">
                <img
                  src={contactUs}
                  alt="contact us"
                  className={classes.contactIcon}
                />
              </a>

              <h4> We are available</h4>

              <div className={classes.socialMediaLinks}>
                {socialMediaLinks.map((item) => (
                  <a key={item.name} href={item.link} target="_blank">
                    <img src={item.icon} alt={item.name} />
                  </a>
                ))}
              </div>
            </div>
          
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
