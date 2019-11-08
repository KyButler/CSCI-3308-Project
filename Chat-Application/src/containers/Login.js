import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./Login.css"


export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("user clicked Login button");
    const loggedInInfo = fetch('../api/auth', {
      method: 'post',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body : JSON.stringify({
	       "username":username,
	       "password":password
        })
    })
    console.log(loggedInInfo);
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username" bsSize="large">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
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
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
