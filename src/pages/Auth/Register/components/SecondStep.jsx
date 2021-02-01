import React from "react";

import { Controller, useForm } from "react-hook-form";

import InputMask from "react-input-mask";

import ButtonLoader from "../../../../components/ButtonLoader/ButtonLoader";
import InputField from "../../../../components/InputField/InputField";
import useGlobal from "../../../../platform/store";

function SecondStep() {
  const [{ formData }, { setFormData, changeFormStep }] = useGlobal();

  const { handleSubmit, errors, register, control } = useForm({
    defaultValues: formData,
    mode: "onChange",
  });


  const onSubmit = (data) => {
    setFormData(data);
    changeFormStep(3);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="auth-form">
       <div style={{ marginBottom: "15px" }}>
          <p style={{ marginBottom: "15px" }}>Phone number</p>
          <Controller
            control={control}
            as={InputMask}
            mask="+999-99-99-99"
            name="phoneNumber"
            rules={{ required: true }}
          />
        </div>


      <InputField
        fieldName={"city"}
        name={"city"}
        type="text"
        label="City"
        inputRef={register()}
      />
      <InputField
        fieldName={"address"}
        name={"address"}
        type="text"
        label="Address"
        inputRef={register()}
      />
      <ButtonLoader
        fullWidth
        type="submit"
        form="auth-form"
        style={{ marginTop: "20px" }}
        inputRef={register()}
      >
        Next
      </ButtonLoader>
    </form>
  );
}

export default SecondStep;
