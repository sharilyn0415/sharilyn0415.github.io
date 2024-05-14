import React from "react";
import Stack from "react-bootstrap/Stack";
import Accordion from "react-bootstrap/Accordion";
import Carousels from "./components/carousel.jsx";

const Home = () => {
  return (
    <Stack className="content">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Finite State Machine</Accordion.Header>
          <Accordion.Body>
            <p>
              A Finite State Machine, or FSM, is a computation model that can be
              used to simulate sequential logic, or, in other words, to
              represent and control execution flow. Finite State Machines can be
              used to model problems in many fields, including mathematics,
              artificial intelligence, games or linguistics.
            </p>
            <p>
              A Finite State Machine is a model of computation based on a
              hypothetical machine made of one or more states. Only one single
              state of this machine can be active at the same time. It means the
              machine has to transition from one state to another in to perform
              different actions.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>The Problem</Accordion.Header>
          <Accordion.Body>
            <Carousels />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Thinking Process</Accordion.Header>
          <Accordion.Body>
            <Carousels />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Tradeoffs</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Q&A</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
};

export default Home;
