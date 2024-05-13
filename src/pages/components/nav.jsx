import React from "react";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link id="home" href="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="progress" eventKey="Progress" href="/#/progress">
          Demo Progress
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Header;
