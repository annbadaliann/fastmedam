import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import { useForm } from "react-hook-form";

import UserController from "../../../platform/api/user";

import ButtonLoader from "../../../components/ButtonLoader/ButtonLoader";

import EmailStep from "./EmailStep";
import CodeStep from "./CodeStep";
import PasswordStep from "./PasswordStep";
import useAuthStyles from "../Auth.style";
import useGlobal from "../../../platform/store";

const ResetFormContainer = ({ resetStep, form, onChange }) => {
  const { email, key, password, confirmPassword } = form;

  switch (resetStep) {
    case "email":
      return <EmailStep email={email} changeHandler={onChange} />;

    case "code":
      return <CodeStep email={key} changeHandler={onChange} />;

    case "password":
      return (
        <PasswordStep
          password={password}
          confirmPassword={confirmPassword}
          changeHandler={onChange}
        />
      );
  }
};

const ResetPassword = () => {
  const [{ resetStep }] = useGlobal();

  const classes = useAuthStyles();

  return (
    <div className="reset-password">
      <h3 className={classes.authTitle}>Reset Password</h3>

      <div className="auth-container">
        {resetStep === 1 ? (
          <EmailStep />
        ) : resetStep === 2 ? (
          <CodeStep />
        ) : (
          <PasswordStep />
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
