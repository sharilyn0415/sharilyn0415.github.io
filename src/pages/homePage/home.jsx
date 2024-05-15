import React from "react";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Carousels from "./components/carousel.jsx";
import StateCharts from "./components/stateCharts.jsx";

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
          <Accordion.Header>The StateCharts</Accordion.Header>
          <Accordion.Body>
            <StateCharts />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>My Two Cents</Accordion.Header>
          <Accordion.Body>
            <Stack direction="horizontal" gap={5}>
              <Card style={{ width: "25rem" }}>
                <Card.Body>
                  <Card.Title>FSM are a great tool for planning UIs</Card.Title>
                  <Card.Text>
                    1. High-level enough to be able to be developed by
                    non-coders
                    <br />
                    2. Low-level enough to actually help you with your code
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "25rem" }}>
                <Card.Body>
                  <Card.Title>Keys of FSM</Card.Title>
                  <Card.Text>
                    1. A list of States
                    <br />
                    2. One Initial State <br />
                    3. A list of events that trigger transitions <br />
                    4. Transitions may be conditional(guards)
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Transfer to web dev</Accordion.Header>
          <Accordion.Body>
            <Carousels />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Brain Storm</Accordion.Header>
          <Accordion.Body>
            <Stack direction="horizontal" gap={5}>
              <Card style={{ width: "25rem" }}>
                <Card.Body>
                  <Card.Title>The problem</Card.Title>
                  <Card.Text>
                    1. Difficult to determin what rules apply when
                    <br />
                    2. Duplication of logic / condition every where
                    <br />
                    3. Code only ever grows in complexity
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "25rem" }}>
                <Card.Body>
                  <Card.Title>Approach Cons</Card.Title>
                  <Card.Text>
                    1. May bring unwanted complexity to super simple components
                    <br />
                    2. Lack of familiarity for dev and designers
                    <br />
                    3. Small ecosystems
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "25rem" }}>
                <Card.Body>
                  <Card.Title>Approach Pros</Card.Title>
                  <Card.Text>
                    1. Less noise, less unimportant states
                    <br />
                    2. Preciseness of the specs, correctness of code <br />
                    3. Improved maintainability and scalability
                    <br />
                    4. Parallel machines can also respond to identical events
                    concurrently
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
};

export default Home;
