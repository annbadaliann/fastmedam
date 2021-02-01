import React from "react";

import UserController from "../../../platform/api/user";

import useStyles from "../Auth.style";

import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import LastStep from "./components/LastStep";
import useGlobal from "../../../platform/store";

function Register() {
  const [{formStep}] = useGlobal();

  return (
    <div className="auth-container">
      {formStep === 1 ? <FirstStep /> : formStep === 2 ? <SecondStep /> : <LastStep />}
    </div>
  );
}

export default Register;
