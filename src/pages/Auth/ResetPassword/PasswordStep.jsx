import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { NotificationManager } from "react-notifications";
import ButtonLoader from "../../../components/ButtonLoader/ButtonLoader";
import InputField from "../../../components/InputField/InputField";
import { passwordValidator } from "../../../platform/services/validator";

import useGlobal from "../../../platform/store";

const PasswordStep = () => {
  const [{ resetForm }, { setResetForm, resetPassword }] = useGlobal();
  
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, errors, register, getValues } = useForm({
    defaultValues: resetForm,
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setResetForm(data);
    setIsLoading(true);
    resetPassword().then(response => {
      if(response) {
        setIsLoading(false);
        
      }
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="email-step">
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
      <ButtonLoader type="submit" form="email-step" style={{marginTop: "20px"}}>
        Submit
      </ButtonLoader>
    </form>
  );
};

export default PasswordStep;
