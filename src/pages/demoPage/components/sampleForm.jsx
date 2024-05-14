import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { STATE, PROGRESS_STATE, API, FORM_DATA } from "../../common/constants";
import { progressFsm } from "../../../lib/progressFsm";

function FormExample({ currentState, setCurrentState }) {
  const [validated, setValidated] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const nextStep = () => {
    progressFsm.transition(PROGRESS_STATE[currentState].transition);
    setCurrentState(progressFsm.getCurrentState());
  };

  const create = () => {
    try {
      fetch(API.exp, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ ...FORM_DATA, status: currentState }),
      })
        .then((res) => res.json())
        .then((res) => nextStep());
    } catch (error) {
      console.error(error.message);
    }
  };

  const update = () => {
    try {
      fetch(API.exp, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ ...FORM_DATA, status: currentState }),
      })
        .then((res) => res.json())
        .then((res) => nextStep());
    } catch (error) {
      console.error(error.message);
    }
  };

  const validate = (form) => {
    if (form.checkValidity() === false) {
      progressFsm.transition(PROGRESS_STATE.cancel.transition);
      setCurrentState(progressFsm.getCurrentState());
    }
    setValidated(true);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    switch (currentState) {
      case STATE.draft:
        create();
        return;
      case STATE.review:
        validate(form);
        if (validated) update();
        return;
      case STATE.approve:
        update();
        return;
      case STATE.release:
        update();
        return;
    }
  };

  const cancel = () => {
    progressFsm.transition(PROGRESS_STATE.cancel.transition);
    setCurrentState(progressFsm.getCurrentState());
  };

  const handleCancel = () => {
    cancel();
  };

  const renderBtnGroups = () => {
    let btnText = "";
    if (currentState == STATE.review) btnText = "Edit";
    if (currentState == STATE.approve) btnText = "Deny";
    return (
      <Stack
        direction="horizontal"
        className="col-md-6 offset-md-6 btn-group mt-5"
        gap={3}
      >
        <Stack className="col-md-1">
          {(currentState == STATE.review || currentState == STATE.approve) && (
            <Button variant="outline-primary" onClick={handleCancel}>
              {btnText}
            </Button>
          )}
        </Stack>

        {PROGRESS_STATE[currentState] && (
          <Button
            type="submit"
            id="transit"
            variant="primary"
            className="col-md-1 mx-auto"
            onClick={handleClick}
          >
            {PROGRESS_STATE[currentState].btnText}
          </Button>
        )}
      </Stack>
    );
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleClick}>
      <Row className="mb-6">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Experiment Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ExperimentName"
            defaultValue="BannerSize"
            readOnly={currentState === "draft" ? "" : "readOnly"}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Experiment Type</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ExperimentType"
            defaultValue="A/B"
            readOnly={currentState === "draft" ? "" : "readOnly"}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-6">
        <Form.Group as={Col} controlId="validationCustomUsername">
          <Form.Label>Product Poc</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="ProductPoc"
              aria-describedby="inputGroupPrepend"
              defaultValue="Mark"
              required
              readOnly={currentState === "draft" ? "" : "readOnly"}
            />
            <Form.Control.Feedback type="invalid">
              Please add a Product POC.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustomUsername">
          <Form.Label>Engeering Poc</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="EngeeringPoc"
              aria-describedby="inputGroupPrepend"
              defaultValue="John"
              required
              readOnly={currentState === "draft" ? "" : "readOnly"}
            />
            <Form.Control.Feedback type="invalid">
              Please add a Engeering POC.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-6">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Business Unit</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="BusinessUnit"
            defaultValue="EDP"
            readOnly={currentState === "draft" ? "" : "readOnly"}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Allocation for Control: {sliderValue}% </Form.Label>
          <Form.Range
            value={sliderValue}
            name="allocation"
            onChange={handleSliderChange}
            className="custom-slider"
            disabled={currentState !== "draft"}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      {renderBtnGroups()}
    </Form>
  );
}

export default FormExample;
