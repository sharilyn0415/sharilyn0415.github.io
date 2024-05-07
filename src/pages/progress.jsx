import React, { useState, useEffect } from "react";
import { API, PROGRESS_STATE } from "./common/constants";
import Form from "./components/sampleForm.jsx";
import { progressFsm } from "../lib/progressFsm.js";

const Progress = () => {
  const [message, setMessage] = useState("");
  const [currentState, setCurrentState] = useState("draft");

  useEffect(() => {
    fetch(API.progress)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  const handleClick = () => {
    try {
      progressFsm.transition(PROGRESS_STATE[currentState].transition);
      const nextState = progressFsm.getCurrentState();
      setCurrentState(nextState);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="content">
      message:{message}
      <Form curState={currentState} />
      {PROGRESS_STATE[currentState] && (
        <button onClick={handleClick}>
          {PROGRESS_STATE[currentState].btnText}
        </button>
      )}
    </div>
  );
};

export default Progress;
