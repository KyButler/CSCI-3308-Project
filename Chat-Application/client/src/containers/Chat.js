import React, { useState, useEffect } from "react";
import { Button, Collapse, Card, ListGroup, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import "./Chat.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { sortBy } from 'lodash'


export default function Chat(props) {
    const [open, setOpen] = useState(false);
    const [channels, setChannels] = useState(null);
    const [messages, setMessages] = useState(null);
    const [userInput, setUserInput] = useState("");
    const [newChannel, setNewChannel] = useState("");

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

    async function handleSubmitNewChannel(e) {
        e.preventDefault();
        console.log(`${props.user.displayname} tried to make ${newChannel}`);
        if (!newChannel) {
            return;
        }
        /* send message if user hits enter */
        const response = await fetch('/api/channels', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: newChannel,
            })
        });
        if (response.ok) {
            console.log("welp, the channel should have been named. . . ")
            setChannels(sortBy([...channels, await response.json()], channel => channel.name.toLowerCase()));
            setNewChannel("");

        } else {
            // cry about it
            // update global user state (working on the easiest way to do this)
            console.log("problem creating new server");
        }
    }

    return (
        <div className="Chat h-100">
            <div className="row h-100">
                <div className="col-2 overflow-auto h-100">
                    <Card>
                        <Card.Header>
                            <Button
                                onClick={() => setOpen(!open)}
                                size="sm"
                                className="float-right"
                            >
                                <span><FontAwesomeIcon icon={open ? faMinus : faPlus} /></span>
                            </Button>
                            <h3 className="mb-0">Channels</h3>
                        </Card.Header>
                        <ListGroup>
                            <Collapse in={open}>
                                <div>
                                    <ListGroup.Item>
                                        <Form onSubmit={handleSubmitNewChannel}>
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    value={newChannel}
                                                    onChange={e => setNewChannel(e.target.value)}
                                                />
                                            </Form.Group>
                                        </Form>
                                    </ListGroup.Item>
                                </div>
                            </Collapse>
                            {/*load channel list*/}
                            {channels && channels.map(channel => <ListGroup.Item key={`channel_${channel.id}`}> <Link to={`/chat/${channel.id}`}>{channel.name}</Link> </ListGroup.Item>)}
                        </ListGroup>
                    </Card>
                </div>
                <div className="col-10 h-100">
                    <Card border="light" className="h-100 d-flex">
                        <Card.Body className="overflow-auto flex-grow-1">
                            <ListGroup id="messages-list">
                                {/*load message list*/}
                                {messages && messages.map(message =>
                                    <ListGroup.Item key={`message_${message.id}`}> <h4>{message.sentBy.displayname}</h4>{message.content} </ListGroup.Item>
                                )}
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className = "mb-0">
                                    <Form.Control
                                        type="text"
                                        value={userInput}
                                        onChange={e => setUserInput(e.target.value)}
                                    />
                                </Form.Group>
                            </Form>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>);//working
};
