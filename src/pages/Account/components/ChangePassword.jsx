import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import { useForm } from "react-hook-form";

import Modal from "../../../components/modal";

import Languages from "../../../platform/services/languages";
import User from "../../../platform/api/user";
import ButtonLoader from "../../../components/ButtonLoader/ButtonLoader";
import InputField from "../../../components/InputField/InputField";
import ResetPassword from '../../Auth/ResetPassword/ResetPassword';
import useStyles from "../Account.style";

const {
  profile: {
    change_password: { title, new_pass, current_pass, confirm_pass },
  },
} = Languages.Translations;

const ChangePassword = () => {
  const [isOpen, setIsOpen ] = useState(false);

  const [saveLoading, setSaveLoading] = useState(false);

  const { register, handleSubmit, reset, errors, getValues } = useForm({
    mode: "onChange",
  });

  const classes = useStyles();

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  const onSubmit = async (formData) => {
    setSaveLoading(true);

    const response = await User.ChangePassword(formData);

    if (response) {
      const { success } = response;
      setSaveLoading(false);
      reset(null);

      if (success) {
        NotificationManager.success(
          "Your password has been changed successfully."
        );
      } else {
        NotificationManager.error(response.messages[0].value);
      }
    }
  };

  return (
    <div className={`${classes.formWrapper} ${classes.changePasswordForm}`}>
      <h2 className={classes.formTitle}>{title}</h2>

      <form className={classes.formGrid} onSubmit={handleSubmit(onSubmit)} id="changePassword">
        <InputField
          fieldName={"oldPassword"}
          name={"oldPassword"}
          inputRef={register({
            required: "Required",
          })}
          type="password"
          label="Current password"
          errorMessage={errors}
          error={!!errors.oldPassword}
          showIcon={true}
        />
        <InputField
          fieldName={"newPassword"}
          name={"newPassword"}
          inputRef={register({
            required: "Required",
          })}
          type="password"
          label="New password"
          errorMessage={errors}
          error={!!errors.newPassword}
          showIcon={true}
        />

        <InputField
          fieldName={"confirmPassword"}
          name={"confirmPassword"}
          inputRef={register({
            required: "Required",
            validate: {
              isEqual: (value) => {
                  return value === getValues('newPassword') || 'Should be the same as new password';
              },
          },
          })}
          type="password"
          label="Confirm password"
          errorMessage={errors}
          error={!!errors.confirmPassword}
          showIcon={true}
        />
      </form>
      <div className={classes.footerSide}>
      <p className={classes.resetPass} onClick={handleOpen}>Reset password</p>
      <div className={classes.buttonWrapper}>
          <ButtonLoader form="changePassword" type="submit" isLoading={saveLoading}> Change password</ButtonLoader>
      </div>
      </div>
      <Modal isOpen={isOpen} close={handleClose}>
        <ResetPassword />
      </Modal>
    </div>
  );
};

export default ChangePassword;
