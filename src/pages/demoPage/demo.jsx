import React, { useState, useEffect } from "react";
import Stack from "react-bootstrap/Stack";

import { STATE, API } from "../common/constants.js";
import Form from "./components/sampleForm.jsx";
import Progress from "./components/progress.jsx";
import ExpList from "./components/list.jsx";
import { Button } from "react-bootstrap";

const DemoProgress = () => {
  const [expList, setExpList] = useState([]);

  const [currentState, setCurrentState] = useState(STATE.draft);

  useEffect(() => {
    try {
      fetch(API.getAll)
        .then((res) => res.json())
        .then((res) => setExpList(Object.values(res.expList)));
    } catch (error) {
      console.error(error.message);
    }
  }, [currentState]);

  const handleClean = () => {
    try {
      fetch(API.clean).then((res) => console.log(res));
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="content">
      <Progress curState={currentState} className="progressBar  mb-5" />
      <Stack direction="horizontal" className="mt-5" gap={5}>
        <Stack className="col-md-6">
          <Form currentState={currentState} setCurrentState={setCurrentState} />
        </Stack>
        <div className="vr" />
        <Stack className="col-md-2 mb-5" gap={1}>
          <p>Helper Text</p>
          <p>
            This is section is for helper text to display here. It can provide
            some guidence for user to fill or perform action...
          </p>
          <p>...</p>
        </Stack>
      </Stack>
      <Stack className="mt-5">
        <ExpList expList={expList} />
        <Button variant="link" onClick={handleClean}>
          Clear
        </Button>
      </Stack>
    </div>
  );
};

export default DemoProgress;
