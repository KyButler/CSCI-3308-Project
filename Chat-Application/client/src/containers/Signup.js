import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./Signup.css";

export default function Signup(props) {
    document.title = 'Sign Up';
    
    const [username, setUsername] = useState("");
    const [displayname, setDisplayname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function validateForm() {
        // add database query to determine if the username already exists or not.
        return password.length > 0 && username.length > 0 && confirmPassword.length > 0 && password === confirmPassword;
    }

    async function handleSubmit(event) {  
        event.preventDefault();
        console.log("user clicked the register button");
        const response = await fetch('/api/users', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                displayname,
                password,
                status: "Just created an account!"  
            })
        });
        if (response.ok) {
            props.setUser(await response.json());
            props.history.push('/chat');
        } else {
            // cry about it
            // update global user state (working on the easiest way to do this)
            alert("The entered username is taken, please try again.");
            return false;
        }
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
                        type="text"
                        value={displayname}
                        onChange={e => setDisplayname(e.target.value)}
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
                        className={confirmPassword && (confirmPassword === password ? 'is-valid' : 'is-invalid')}
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
