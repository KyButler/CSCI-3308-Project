import React, { useState, useEffect } from "react";
import { Button, Collapse, Card, ListGroup, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import "./Chat.css";

export default function Chat(props) {
    const [open, setOpen] = useState(false);
    const [channels, setChannels] = useState(null);
    const [messages, setMessages] = useState(null);
    const [userInput, setUserInput] = useState("");

    useEffect(() => { document.title = 'Chat'; }, []);

    useEffect(() => {
        const fetchChannels = async () => {
            const response = await fetch('/api/channels', {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                const text = await response.text();
                if (text) {
                    setChannels(JSON.parse(text));
                }
            }
        }
        fetchChannels();
    }, []);

    useEffect(() => {
        const fetchMessages = async () => {
            if (!props.match.params.channelId) {
                return;
            }
            const response = await fetch(`/api/channels/${props.match.params.channelId}/messages`, {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                const text = await response.text();
                if (text) {
                    setMessages(JSON.parse(text));
                }
            }
        }
        fetchMessages();
    }, [props.match.params.channelId]);

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(`${props.user.displayname} tried to send ${userInput}`);
        if (!userInput) {
            return;
        }
        /* send message if user hits enter */
        const response = await fetch('/api/messages', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: userInput,
                channelId: props.match.params.channelId,
            })
        });
        if (response.ok) {
            console.log("welp, the message actually sent. . . ")
            setMessages([...messages, await response.json()]);
            setUserInput("");

        } else {
            // cry about it
            // update global user state (working on the easiest way to do this)
        }
    }

    return (
        <div className="Chat flex-grow-1" style={{ 'backgroundColor': 'lightgray', 'paddingTop': '15px'}}>
            <div className="row h-100 flex-grow-1">
                <div className="col-2 overflow-auto mh-100">
                    <Card>
                        <Card.Body className="text-white bg-info">
                            {/*load channel list*/}
                            {channels && channels.map(channel => <ListGroup.Item key={`channel_${channel.id}`}> <Link to={`/chat/${channel.id}`}>{channel.name}</Link> </ListGroup.Item>)}
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-10 overflow-auto mh-100">
                    <Card border="light">
                        <Card.Body>
                            <ListGroup id="messages-list" className="list-group">
                                {/*load message list*/}
                                {messages && messages.map(message => 
                                    <ListGroup.Item key={`message_${message.id}`}> <h4>{message.sentBy.displayname}</h4>{message.content} </ListGroup.Item>
                                )}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                value={userInput}
                                onChange={e => setUserInput(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>);//working
};
