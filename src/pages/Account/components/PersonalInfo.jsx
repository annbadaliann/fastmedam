import React, { useEffect, useState, createRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { NotificationManager } from "react-notifications";


import { phoneNumberValidator } from '../../../platform/services/validator'
import InputMask from "react-input-mask";

import ButtonLoader from "../../../components/ButtonLoader/ButtonLoader";
import InputField from "../../../components/InputField/InputField";
import FDatePicker from "../../../components/DatePicker/DatePicker";
import UserController from "../../../platform/api/user";
import Languages from "../../../platform/services/languages";
import useGlobal from "../../../platform/store";
import useStyles from "../Account.style";

const {
  profile: {
    personal_info: {
      title,
      first_name,
      last_name,
      phone_number,
      address: addressInfo,
      city: cityInfo,
    },
  },
} = Languages.Translations;

const PersonalInfoModifying = () => {
  const [saveLoading, setSaveLoading] = useState(false);
  const [{ userDetails }, { getUserDetails }] = useGlobal();

  const pickerRef = createRef();

  const { register, handleSubmit, reset, errors, setValue, control } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (userDetails) {
      setValue("firstName", userDetails.firstName || "");
      setValue("lastName", userDetails.lastName || "");
      setValue("phoneNumber", userDetails.phoneNumber || "");
      setValue("city", userDetails.city || "");
      setValue("address", userDetails.address || "");
      setValue("dateOfBirth", userDetails.dateOfBirth || "");
    }
  }, [userDetails]);

  const classes = useStyles();

  const onSubmit = async (formData) => {
    console.log(formData);
    setSaveLoading(true);
    const response = await UserController.UpdateInfo(formData);

    if (response) {
      setSaveLoading(false);

      if (response.success) {
        getUserDetails();
        NotificationManager.success("Success");
      }
    }
  };

  return (
    <div className={classes.formWrapper}>
      <h2 className={classes.formTitle}>{title}</h2>

      <form
        className="auth-form"
        className={classes.formGrid}
        onSubmit={handleSubmit(onSubmit)}
        id="editInfo"
      >
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
          margin="none"
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
          margin="none"
        />
        <div>
          <p style={{ marginBottom: "15px" }}>Phone number</p>
          <Controller
            control={control}
            as={InputMask}
            mask="+999-99-99-99"
            name="phoneNumber"
            inputRef={register({
              required: "Required",
            })}
            rules={{ required: true }}
            defaultValue={userDetails && userDetails.phoneNumber}
          />
        </div>

        {/* <Controller
           fullWidth
           as={FDatePicker}
           ref={pickerRef}
           defaultValue={userDetails && userDetails.dateOfBirth || new Date()}
           name={'dateOfBirth'}
           error={!!errors.dateOfBirth}
           control={control}
           inputProps={{
               margin: 'none',
           }}
        /> */}
        <InputField
          fieldName={"city"}
          name={"city"}
          type="text"
          label="City"
          inputRef={register()}
          margin="none"
        />
        <InputField
          fieldName={"address"}
          name={"address"}
          type="text"
          label="Address"
          inputRef={register()}
          margin="none"
        />
      </form>

      <div className={classes.buttonWrapper}>
        <ButtonLoader form="editInfo" type="submit" isLoading={saveLoading}>
          {" "}
          SAVE CHANGES
        </ButtonLoader>
      </div>
    </div>
  );
};

export default PersonalInfoModifying;
