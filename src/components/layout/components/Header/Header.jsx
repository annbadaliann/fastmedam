import React from "react";
import Logo from "../../../../assets/images/logo.png";
import "./Header.style.js";
import { to } from "../../../../platform/constants/routes";
import { withRouter, Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import useStyles from './Header.style';
import { Badge, Container } from "@material-ui/core";
import SearchField from "../../../SearchFIeld/SearchField";


const categoryOptions = [
  {
    name: "Obstetrics, gynecology",
    value: "M",
  },
  {
    name: "Obstetrics, gynecology",
    value: "M",
  },
  {
    name: "Obstetrics, gynecology",
    value: "M",
  },
  {
    name: "Obstetrics, gynecology",
    value: "M",
  },
  {
    name: "Obstetrics, gynecology",
    value: "M",
  },
  {
    name: "Obstetrics, gynecology",
    value: "M",
  },
  {
    name: "Obstetrics, gynecology",
    value: "M",
  },
  {
    name: "Obstetrics, gynecology",
    value: "M",
  },
  {
    name: "Obstetrics, gynecology",
    value: "M",
  },
  {
    name: "Obstetrics, gynecology",
    value: "M",
  },
  {
    name: "Obstetrics, gynecology",
    value: "M",
  },
];

const  Header = () => {


  const location = useLocation();
  const classes = useStyles();

    if (
      location.pathname.match("home") ||
      location.pathname.match("contact-us") ||
      location.pathname.match("find-pharmacy") ||
      location.pathname.match("account")
    ) {
      return null;
    }

    return (
      <>
        <header className={classes.header}>
          <Container>
            
          <div className={classes.headerContainer}>

            <div className={classes.searchWrapper}>


            <SearchField />
              <div className={classes.cart}>
              <Badge
        classes={{ badge: classes.badge }}
        badgeContent={1}
      >
            <ShoppingCartIcon/>
            </Badge>
            <span>cart is empty</span>
              </div>

            </div>

              <Link to={to.home}  className={classes.logo}>
                <img src={Logo} alt="Logo" />
              </Link>

               

                {/* <div className="cart-status d-flex align-center">
                  <img src={basket} alt="basket" />
                  <p>Cart is empty</p>
                </div> */}
          </div>
          </Container>
        </header>

      </>
    );
  }

export default withRouter(Header);
