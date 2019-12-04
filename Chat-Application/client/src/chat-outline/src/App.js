import React, { Component } from 'react';
import './App.css';
import Messages from "./Messages";
import Input from "./Input";


class App extends Component {
  state = {
    messages: [ //messages currently stored in a list
      {
        text: "Testing!",
        member: {
          color: '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16),
          username: "tenmo"
        }
      }
    ],
    member: {
      username: "tenmo", //username read from DB
      color: '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16)  //Random color generator
    }
  }

  render() {
    return (
      <div className="App"> 
        <Messages //render messages.js
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input //render input.js
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }

  onSendMessage = (message) => {
    const messages = this.state.messages
    messages.push({                       //once message is sent from enter key, add to list
      text: message,
      member: this.state.member
    })
    this.setState({messages: messages})
  }

}

export default App;
