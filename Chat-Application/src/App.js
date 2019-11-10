import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";
import Login from "./containers/Login";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup";

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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
