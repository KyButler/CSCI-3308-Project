import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./Signup.css";

export default function Signup(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function validateForm() {
      return password.length > 0 && username.length > 0 && confirmPassword.length > 0;
    }

    function handleSubmit(event) {
      event.preventDefault();
    }

    return (
      <div className="Signup">
        <form onSubmit={handleSubmit}>
          <Form.Group controlId="Username" bsSize="large">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              type="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword" bsSize="large">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
                type="password"
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
            />
            </Form.Group>
          <Button block bsSize="large" disabled={!validateForm()} type="submit">
            Login
          </Button>
        </form>
      </div>
    );
}
