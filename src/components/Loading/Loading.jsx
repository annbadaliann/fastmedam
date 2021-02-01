import React from "react";

import useStyles from "./Loading.style.js";

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.loader}/>
    </div>
  );
};

export default Loading;
