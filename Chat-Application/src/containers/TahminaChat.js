import React from "react";
import Button from 'react-bootstrap/Button';
import "./Chat.css";


export default function Chat(props) {
  document.title = 'Chat';
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-2">
        <div className="card">
          <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#channels">Channels</button>
          <div id="channels" className="collapse">
            <ul id="channels-list" className="list-group">
              <li className="list-group-item">John Doe</li>
              <li className="list-group-item">Jane Doe</li>
              <li className="list-group-item">Jimmy Doe</li>
            </ul>
          </div>
        </div>
        <div className="card">
        <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#groups">Groups</button>
          <div id="groups" className="collapse">
            <ul id="groups-list" className="list-group">
              <li className="list-group-item">Software Development</li>
              <li className="list-group-item">Business Leaders</li>
              <li className="list-group-item">Research Project</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-8">
        <div className="card">
          <div className="card-header">
            <h5 id="header-name">John Doe</h5>
          </div>
          <div id="messages" className="card-body">
            <div className="overflow-auto">
              <ul id="messages-list" className="list-group">
                <li className="list-group-item">Hey!</li>
                <li className="list-group-item">Hi!</li>
                <li className="list-group-item">How are you?</li>
                <li className="list-group-item">Great!</li>
              </ul>
            </div>
          </div>
          <div className="card-footer">
            <input type="text"/>
          </div>
        </div>
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
