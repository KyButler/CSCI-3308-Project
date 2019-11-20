import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./Signup.css";

export default function Signup(props) {
    document.title = 'Sign Up';
    
    const [username, setUsername] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function validateForm() {
        // add database query to determine if the username already exists or not.

        if (password !== confirmPassword && confirmPassword !== "") { // if the password isn't empty and wrong
            console.log("passwords don't match.");
            document.getElementById("confirmPassword").classList.remove("is-valid");
            document.getElementById("confirmPassword").classList.add("is-invalid");
            return 0;
        }
        else if (password === confirmPassword && confirmPassword !== "") { // if the password matches
            document.getElementById("confirmPassword").classList.remove("is-invalid");
            document.getElementById("confirmPassword").classList.add("is-valid");
        }
        return password.length > 0 && username.length > 0 && confirmPassword.length > 0;
    }

    function handleSubmit(event) {  
        event.preventDefault();
        console.log("user clicked the register button");

    }

    return (
        <div className="Signup">
            <form onSubmit={handleSubmit}>
                <Form.Group controlId="Username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="username"
                         value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="DisplayName">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={displayName}
                        onChange={e => setDisplayName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        className=""
                    />
                </Form.Group>
                <br />
                <Button block disabled={!validateForm()} type="submit">
                    Sign Up
                </Button>
            </form>
        </div>
    );
}
