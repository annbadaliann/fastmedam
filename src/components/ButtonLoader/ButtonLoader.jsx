import React, { memo } from "react";

import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

import useStyles from "./ButtonLoader.style";

function ButtonLoader({
  color,
  disabled,
  fullWidth,
  isLoading,
  children,
  buttonType,
  className,
  clickHandler,
  ...other
}) {
  const classes = useStyles({ fullWidth });

  return (
    <Button
      color={color}
      className={`${classes.buttonWrapper} ${className}`}
      disabled={isLoading || disabled}
      fullWidth={fullWidth}
      type={buttonType}
      onClick={clickHandler}
      {...other}
    >
      {children}

      {isLoading && (
        <LinearProgress
          className={classes.loader}
          color={color}
          classes={{
            barColorPrimary: classes.barColorPrimary,
            barColorSecondary: classes.barColorSecondary,
          }}
        />
      )}
    </Button>
  );
}

export default memo(ButtonLoader);
