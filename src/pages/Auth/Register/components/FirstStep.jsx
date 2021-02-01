import React from "react";
import { useForm } from "react-hook-form";
import { NotificationManager } from "react-notifications";

import ButtonLoader from "../../../../components/ButtonLoader/ButtonLoader";
import InputField from "../../../../components/InputField/InputField";
import UserController from "../../../../platform/api/user";
import { emailValidator } from "../../../../platform/services/validator";
import useGlobal from "../../../../platform/store";

function FirstStep() {
  const [{ formData }, { setFormData, changeFormStep }] = useGlobal();

  const { handleSubmit, errors, register } = useForm({
    defaultValues: formData,
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log(data);
    setFormData(data);
    const response = await UserController.CheckEmail(data.email);
    console.log(response);

    if (response && response.success) {
      changeFormStep(2);
    } else {
      NotificationManager.error(response.messages[0].value);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="auth-form">
      <InputField
        fieldName={"firstName"}
        name={"firstName"}
        inputRef={register({
          required: "Required",
        })}
        type="text"
        label="First name"
        errorMessage={errors}
        error={!!errors.firstName}
      />
      <InputField
        fieldName={"lastName"}
        name={"lastName"}
        inputRef={register({
          required: "Required",
        })}
        type="text"
        label="Last name"
        errorMessage={errors}
        error={!!errors.lastName}
      />
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
        type="email"
        label="Email"
        errorMessage={errors}
        error={!!errors.password}
      />
      <ButtonLoader
        fullWidth
        type="submit"
        form="auth-form"
        style={{ marginTop: "20px" }}
      >
        Next
      </ButtonLoader>
    </form>
  );
}

export default FirstStep;
