import React from "react";
import { Link } from "react-router-dom";

import useStyles from './Empty.style';

const Empty = ({ name, icon, link }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>
        Your <span style={{ color: "#92d365" }}> {name} </span>is empty.
      </h2>
      <div className={classes.icon}>
        <img src={icon} alt="Empty cart" />
      </div>

      {link && <Link to="search-medicine" className={classes.link}>Medicines List</Link>}
    </div>
  );
};

export default Empty;
