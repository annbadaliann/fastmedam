import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NotificationManager } from "react-notifications";
import ButtonLoader from "../../../components/ButtonLoader/ButtonLoader";
import InputField from "../../../components/InputField/InputField";
import UserController from "../../../platform/api/user";

import { emailValidator } from "../../../platform/services/validator";
import useGlobal from "../../../platform/store";

const EmailStep = () => {
  const [{ resetForm }, { setResetForm, changeResetStep }] = useGlobal();
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, errors, register } = useForm({
    defaultValues: resetForm,
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setResetForm(data);
    setIsLoading(true);

    const response = await UserController.SendKey(data.email);
    if (response) {
      setIsLoading(false);
      if (response.success) {
        NotificationManager.success('We have sent code to your email, please check.');
        changeResetStep(2);
      } else {
        NotificationManager.error(response.messages[0].value);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="email-step">
      <InputField
        fieldName={"email"}
        name={"email"}
        inputRef={register({
          required: "Required",
          pattern: {
            value: emailValidator(),
            message: "Email is not valid",
          },
        })}
        type="text"
        label="Email"
        errorMessage={errors}
        error={!!errors.email}
      />
      <ButtonLoader
        isLoading={isLoading}
        type="submit"
        form="email-step"
        style={{ marginTop: "20px" }}
      >
        Next
      </ButtonLoader>
    </form>
  );
};

export default EmailStep;
