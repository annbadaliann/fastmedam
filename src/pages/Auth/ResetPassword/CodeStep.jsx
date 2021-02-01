import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NotificationManager } from "react-notifications";
import ButtonLoader from "../../../components/ButtonLoader/ButtonLoader";
import InputField from "../../../components/InputField/InputField";
import UserController from "../../../platform/api/user";
import { maxDigits } from "../../../platform/services/validator";

import useGlobal from "../../../platform/store";

const CodeStep = () => {
  const [{ resetForm }, { setResetForm, changeResetStep }] = useGlobal();

  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, errors, register, reset} = useForm({
    defaultValues: resetForm,
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setResetForm(data);
    setIsLoading(true);

    const response = await UserController.VerifyKey({email: resetForm.email, key: data.key});

    if (response) {
      setIsLoading(false);
      if (response.success) {
        changeResetStep(3);
      } else {
        NotificationManager.error(response.messages[0].value);
        reset(null)
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="code-step">
      <InputField
        fieldName={"key"}
        name={"key"}
        inputRef={register({
          required: "Required",
        })}
        type="number"
        label="Code"
        errorMessage={errors}
        error={!!errors.key}
      />
      <ButtonLoader isLoading={isLoading} type="submit" form="code-step" style={{marginTop: "20px"}}>
        Next
      </ButtonLoader>
    </form>
  );
};

export default CodeStep;
