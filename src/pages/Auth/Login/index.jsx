import React, { useState } from "react";
import { useHistory } from "react-router";
import { NotificationManager } from "react-notifications";
import { useForm } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ButtonLoader from "../../../components/ButtonLoader/ButtonLoader";
import InputField from "../../../components/InputField/InputField";
import AuthController from "../../../platform/api/auth";
import useGlobal from "../../../platform/store";
import useAuthStyles from "../Auth.style";
import {
  emailValidator,
  passwordValidator,
} from "../../../platform/services/validator";
import ResetPassword from "../ResetPassword/ResetPassword";

const Login = () => {
  const [{}, {authenticate, setAuthModal, setAuthModalStep}] = useGlobal();
  const history = useHistory();

  const { register, handleSubmit, watch, reset, errors } = useForm({
    mode: "onChange",
  });

  const classes = useAuthStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPassword, SetIsForgotPassword] = useState(false);

  const onSubmit = async (formData) => {
    setIsLoading(true);

    authenticate(formData).then(data => {
      if(data){
        setIsLoading(false);
        if(data.success){
          setAuthModal(false)
        }
      }
    })

    reset(null)
  };

  const handlePasswordReset = () => {
    setAuthModalStep("reset");
  };

  return (
    <>
      {!isForgotPassword ? (
        <div className="auth-container">
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              fieldName={"userName"}
              name={"userName"}
              inputRef={register({
                required: "Required",
                pattern: {
                  value: emailValidator(),
                  message: "Email is not valid",
                },
              })}
              type="email"
              label="Email"
              errorMessage={errors}
              error={!!errors.password}
            />
            <InputField
              fieldName={"password"}
              name={"password"}
              inputRef={register({
                required: "Required",
                pattern: {
                  value: passwordValidator(),
                  message: "Password must contain at least 5 characters",
                },
              })}
              type="password"
              label="Password"
              errorMessage={errors}
              error={!!errors.password}
              showIcon={true}
            />
            <div className={classes.signInFooter}>
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
                label={<p className={classes.checkboxLabel}>Remember</p>}
              />
              <span onClick={handlePasswordReset}>Forgot Password</span>
            </div>

            <ButtonLoader fullWidth isLoading={isLoading} type="submit">
              Sign in
            </ButtonLoader>
          </form>
         
        </div>
      ) : (
        <p> reset password</p>
      )}
    </>
  );
};

export default Login;
