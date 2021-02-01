import React, { Fragment, useState } from "react";

import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { ErrorMessage } from "@hookform/error-message";

import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import useStyles from "./InputField.style";

function PasswordFieldVisibilityIcon({ isVisible, toggleVisibility }) {
  const classes = useStyles();

  console.log("here");

  return (
    <InputAdornment position="end">
      <IconButton
        onClick={toggleVisibility}
        aria-label="toggle password visibility"
        className={classes.eyeIcon}
      >
        {isVisible ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
}

function FMInputErrorMessage({ errors, fieldName }) {
  const classes = useStyles();
  return (
    <ErrorMessage
      errors={errors}
      name={fieldName}
      render={({ message }) => (
        <Box className={classes.errorMessage}>{message}</Box>
      )}
    />
  );
}

function InputField({
  label,
  type,
  errorMessage,
  fieldName,
  margin,
  value,
  inputRef,
  name,
  showIcon,
  ...rest
}) {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [inputType, setInputType] = useState(type);
  const classes = useStyles();

  const togglePassword = () => {
    setPasswordVisibility(!isPasswordVisible);
    return isPasswordVisible ? setInputType("password") : setInputType("text");
  };

  return (
    <Fragment>
      <FormControl fullWidth margin={margin}>
        <label>{label}</label>
        <Input
          name={name}
          value={value}
          type={inputType}
          inputRef={inputRef}
          classes={{ input: classes.input, root: classes.root }}
          error={true}
          disableUnderline={true}
          margin="none"
          endAdornment={ showIcon && <PasswordFieldVisibilityIcon
            isVisible={isPasswordVisible}
            toggleVisibility={togglePassword}
          />}
        //   inputProps={{
        //     ...inputProps,
        //   }}
          {...rest}
        />

        {errorMessage && (
          <FMInputErrorMessage fieldName={fieldName} errors={errorMessage} />
        )}
      </FormControl>
    </Fragment>
  );
}

InputField.defaultProps = {
  variant: "outlined",
  margin: "dense",
};

export default InputField;
