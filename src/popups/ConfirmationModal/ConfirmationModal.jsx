import React from "react";
import Languages from "../../platform/services/languages";

import "./ConfirmationModal.style.scss";

const { modal_actions: { cancel: canceling, confirm: confirming } } = Languages.Translations;

const ConfirmationModal = ({ description, cancel, confirm }) => {
  return (
    <div className="confirmation-modal">
      {/* TODO make dynamic add description */}
      <p>{description}</p>

      <div className="buttons">
        <button onClick={cancel} className="cancel">{canceling}</button>
        <button className="confirm" onClick={confirm}>
          {confirming}
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
