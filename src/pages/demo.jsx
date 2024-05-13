import React, { useState, useEffect } from "react";
import { API, STATE, PROGRESS_STATE, FORM_DATA } from "./common/constants.js";
import Form from "./components/sampleForm.jsx";
import { progressFsm } from "../lib/progressFsm.js";
import Button from "react-bootstrap/Button";
import Progress from "./components/progress.jsx";

const DemoProgress = () => {
  const [message, setMessage] = useState("");
  const [currentState, setCurrentState] = useState(STATE.draft);

  useEffect(() => {
    if (currentState === STATE.review) {
      localStorage.setItem(FORM_DATA.id, JSON.stringify(FORM_DATA));
    }
  }, [currentState]);

  const handleClick = () => {
    try {
      progressFsm.transition(PROGRESS_STATE[currentState].transition);
      setCurrentState(progressFsm.getCurrentState());
      fetch(API.create, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ user: USER.user1, ...FORM_DATA }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCancel = () => {
    progressFsm.transition(PROGRESS_STATE.cancel.transition);
    setCurrentState(progressFsm.getCurrentState());
  };

  const renderCancelBtn = () => {
    if (currentState == STATE.review)
      return (
        <Button variant="light" onClick={handleCancel}>
          Cancel
        </Button>
      );
    if (currentState == STATE.approve)
      return (
        <Button variant="light" onClick={handleCancel}>
          Deny
        </Button>
      );
  };

  return (
    <div className="content">
      message:{message}
      <Progress curState={currentState} />
      <Form curState={currentState} />
      {(currentState == STATE.review || currentState == STATE.approve) &&
        renderCancelBtn()}
      {PROGRESS_STATE[currentState] && (
        <Button id="transit" variant="primary" onClick={handleClick}>
          {PROGRESS_STATE[currentState].btnText}
        </Button>
      )}
    </div>
  );
};

export default DemoProgress;
