import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ButtonLoader from "../../../../components/ButtonLoader/ButtonLoader";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import InputField from "../../../../components/InputField/InputField";
import { passwordValidator } from "../../../../platform/services/validator";
import useGlobal from "../../../../platform/store";

import useStyles from "../../Auth.style";
import { NotificationManager } from "react-notifications";

function LastStep() {
  const [{ formData }, { setFormData, sendData, setAuthModal}] = useGlobal();

  const classes = useStyles();

  const { handleSubmit, errors, register, getValues } = useForm({
    defaultValues: formData,
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
    sendData().then(response => {
      if(response && response.success){ 
        NotificationManager.success('Welcome to Fastmed')
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="auth-form">
      <InputField
        fieldName={"password"}
        name={"password"}
        inputRef={register({
          required: "Required",
          pattern: {
            value: passwordValidator(),
            message: "Password must contain min 5 characters",
          },
        })}
        type="password"
        label="Password"
        errorMessage={errors}
        error={!!errors.password}
        showIcon={true}
      />

      <InputField
        fieldName={"confirmPassword"}
        name={"confirmPassword"}
        inputRef={register({
          required: "Required",
          pattern: {
            value: passwordValidator(),
            message: "Password must contain min 5 characters",
          },
          validate: {
            isEqual: (value) => {
                return value === getValues('password') || 'Should be the same as password';
            }
          }
        })}
        type="password"
        label="Confirm password"
        errorMessage={errors}
        error={!!errors.confirmPassword}
        showIcon={true}
      />

      <div>
        <FormControlLabel
          className={classes.checkboxLabel}
          control={
            <Checkbox
              classes={{
                root: classes.root,
                checked: classes.checked,
                colorSecondary: classes.colorSecondary,
              }}
            />
          }
          label={
            <p className={classes.checkboxLabel}>
              I agree to <Link to="/terms">Fastmed terms of service</Link>
            </p>
          }
        />
      </div>
      <ButtonLoader
        fullWidth
        type="submit"
        form="auth-form"
        style={{ marginTop: "20px" }}
      >
        Submit
      </ButtonLoader>
    </form>
  );
}

export default LastStep;
