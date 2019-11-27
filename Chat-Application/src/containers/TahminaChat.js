import React from "react";
import Button from 'react-bootstrap/Button'
import "./Chat.css";


export default function Chat(props) {
  document.title = 'Chat';
  return (
    <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="card">
          <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#channels">Channels</button>
          <div id="channels" class="collapse">
            <ul id="channels-list" class="list-group">
              <li class="list-group-item">John Doe</li>
              <li class="list-group-item">Jane Doe</li>
              <li class="list-group-item">Jimmy Doe</li>
            </ul>
          </div>
        </div>
        <div class="card">
        <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#groups">Groups</button>
          <div id="groups" class="collapse">
            <ul id="groups-list" class="list-group">
              <li class="list-group-item">Software Development</li>
              <li class="list-group-item">Business Leaders</li>
              <li class="list-group-item">Research Project</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="card">
          <div class="card-header">
            <h5 id="header-name">John Doe</h5>
          </div>
          <div id="messages" class="card-body">
            <div class="overflow-auto">
              <ul id="messages-list" class="list-group">
                <li class="list-group-item">Hey!</li>
                <li class="list-group-item">Hi!</li>
                <li class="list-group-item">How are you?</li>
                <li class="list-group-item">Great!</li>
              </ul>
            </div>
          </div>
          <div class="card-footer">
            <input type="text"/>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="card">
          <ul id="online-list" class="list-group">
            <li class="list-group-item">Carl Benny</li>
            <li class="list-group-item">Benny Carl</li>
            <li class="list-group-item">Joe Doe</li>
            <li class="list-group-item">Doe John</li>
          </ul>
        </div>
      </div>
    </div>
  </div>);
};
