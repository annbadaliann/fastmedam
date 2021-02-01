import React from "react";
import { NavLink } from "react-router-dom";

import Languages from "../../../../../platform/services/languages";
import { to } from "../../../../../platform/constants/routes";

import homeIcon from "../../../../../assets/icons/home.png";
import homeIconAct from "../../../../../assets/icons/home 2.png";
import cartIcon from "../../../../../assets/icons/cart.png";
import cartIconAct from "../../../../../assets/icons/cart 2.png";
import favoritesIcon from "../../../../../assets/icons/favorites.png";
import favoritesIconAct from "../../../../../assets/icons/favorites 2.png";
import notificationsIcon from "../../../../../assets/icons/notifications.png";
import notificationsIconAct from "../../../../../assets/icons/notifications 2.png";
import notesIcon from "../../../../../assets/icons/notes.png";
import notesIconAct from "../../../../../assets/icons/notes 2.png";
import deliveryIcon from "../../../../../assets/icons/delivery.png";
import deliveryIconAct from "../../../../../assets/icons/delivery 2.png";
import pickUpIcon from "../../../../../assets/icons/pick up.png";
import pickUpIconAct from "../../../../../assets/icons/pick up 2.png";
import contactsIcon from "../../../../../assets/icons/contacts.png";
import contactsIconAct from "../../../../../assets/icons/contacts 2.png";

import useStyles from "./Sidebar.style.js";


const {
  home,
  shopping_cart,
  notifications,
  notes,
  favorites,
  delivery,
  pick_up,
  contact_us,
} = Languages.Translations;


const Sidebar = ({ close }) => {
  const classes = useStyles();

  const closeBar = () => close();

  const locationName = window.location.href.split("/").reverse()[0];

  const sidebarItems = [
    {
      path: to.home,
      icon: locationName === "home" ? homeIconAct : homeIcon,
      name: home,
    },
    {
      path: to.cart,
      icon: locationName === "cart" ? cartIconAct : cartIcon,
      name: shopping_cart,
    },
    {
      path: to.favorites,
      icon: locationName === "favorites" ? favoritesIconAct : favoritesIcon,
      name: favorites,
    },
    {
      path: to.notifications,
      icon:
        locationName === "notifications"
          ? notificationsIconAct
          : notificationsIcon,
      name: notifications,
    },
    {
      path: to.notes,
      icon: locationName === "notes" ? notesIconAct : notesIcon,
      name: notes,
    },
    {
      path: to.delivery,
      icon: locationName === "delivery" ? deliveryIconAct : deliveryIcon,
      name: delivery,
    },
    {
      path: to.pickUp,
      icon: locationName === "pickUp" ? pickUpIconAct : pickUpIcon,
      name: pick_up,
    },
    {
      path: to.contactUs,
      icon: locationName === "contact-us" ? contactsIconAct : contactsIcon,
      name: contact_us,
    },
  ];

  return (
    <div className={classes.sidebar}>
      <i className={`icon-ic_close ${classes.closeIcon}`} onClick={closeBar} />

      {sidebarItems.map((item, i) => {
        const { path, name, icon } = item;
        return (
          <div className={classes.sidebarItem} key={i}>
            <NavLink
              onClick={closeBar}
              to={path}
              className={classes.page}
              activeClassName={classes.activePage}
            >
              <img src={icon} alt={name} className={classes.icon} />
              <span className={classes.name}> {name} </span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
