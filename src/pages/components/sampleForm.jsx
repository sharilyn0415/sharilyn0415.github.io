import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function FormExample({ curState }) {
  const [validated, setValidated] = useState(false);
  const editable = curState === "draft";

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      //   event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Experiment Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ExperimentName"
            defaultValue="BannerSize"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Experiment Type</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ExperimentType"
            defaultValue="A/B"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Product Poc</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="ProductPoc"
              aria-describedby="inputGroupPrepend"
              defaultValue="Mark"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please add a Product POC.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Experiment Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ExperimentName"
            defaultValue="BannerSize"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Experiment Type</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ExperimentType"
            defaultValue="A/B"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Product Poc</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="ProductPoc"
              aria-describedby="inputGroupPrepend"
              defaultValue="Mark"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please add a Product POC.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
    </Form>
  );
}

export default FormExample;
