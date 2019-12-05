import { Modal, Form } from "react-bootstrap";
import React, { useState }  from "react";

export default function ChangeDisplayNameModal(props) {
    const [newDisplayName, setNewDisplayName] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("user clicked the register button");
        const response = await fetch('/api/users', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                displayname: newDisplayName
            })
        });
        if (response.ok) {
            props.setUser(await response.json());
            props.onHide();
        } else {
            // cry about it
            // update global user state (working on the easiest way to do this)
            return false;
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Enter a new display name:
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={newDisplayName}
                            onChange={e => setNewDisplayName(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
} 