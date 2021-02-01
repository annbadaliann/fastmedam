import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
  },
  text: {
    fontSize: "18px",
  },
}));

const NothingFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>Nothing found.</p>
    </div>
  );
};

export default NothingFound;
