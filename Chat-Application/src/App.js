import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import Routes from "./Routes";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";

function App(props) {
  return (
    <div className="App container">
      <Navbar bg="light" >
          <Navbar.Brand>
            <Link to="/">ChatApp</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
