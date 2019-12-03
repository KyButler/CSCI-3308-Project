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
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <div className="card">
                        <Button onClick={() => setOpen(!open)}>Channels</Button>
                        <Collapse in={open}>
                            <ListGroup>
                                {/*load channel list*/}
                                {channels && channels.map(channel => <ListGroup.Item key={`channel_${channel.id}`}> <Link to={`/chat/${channel.id}`}>{channel.name}</Link> </ListGroup.Item>)}
                            </ListGroup>
                        </Collapse>
                    </div>
                </div>
                <div className="col-8">
                    <Card>
                        <Card.Body>
                            <div className="overflow-auto">
                                <ul id="messages-list" className="list-group">
                                    {/*load message list*/}
                                    {messages && messages.map(message => 
                                        <ListGroup.Item key={`message_${message.id}`}> <h3>{message.sentBy.username}</h3><br></br>{message.content} </ListGroup.Item>
                                    )}
                                </ul>
                            </div>
                        </Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    value={userInput}
                                    onChange={e => setUserInput(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                        

                    </Card>
                </div>
                <div className="col-2">
                    <div className="card">
                        <ul id="online-list" className="list-group">
                            <li className="list-group-item">Carl Benny</li>
                            <li className="list-group-item">Benny Carl</li>
                            <li className="list-group-item">Joe Doe</li>
                            <li className="list-group-item">Doe John</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>);
};
