import {Component} from "react";
import React from "react";

class Messages extends Component { //Component recieves messages it should display as a prop from App.js
  render() {
    const {messages} = this.props; //holds the list of all of the messages to be displayed
    return (
      <ul className="Messages-list"> 
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) { //render JSX for each individual message
    const {member, text} = message; 
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ? "Messages-message currentMember" : "Messages-message";
    return (
      <li className={className}>
        <span
          className="avatar" //customizable avatar can be added too if needed
          style={{backgroundColor: member.color}}
        />
        <div className="Message-content"> 
          <div className="username">
            {currentMember.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}

export default Messages;  