import React, { useState } from "react";

import "./AskQuestionModal.style.scss";

const AskQuestionModal = () => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const change = (e) => setQuestion(e.target.value);
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (question) {
      // SEND QUESTION TO SERVER
      window.location.reload();
    }
  };

  return (
    <div className="ask-question">
      <h3>Ask a question</h3>
      <textarea
        value={question}
        name="question"
        onChange={change}
        className={submitted && !question ? "G-invalid-input" : ""}
      ></textarea>
      <button className="G-button" onClick={submit}>
        Send
      </button>
    </div>
  );
};

export default AskQuestionModal;
