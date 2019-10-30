import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="card">
        <div className="card-header">
          <h1 className="chat-header">Name TBD</h1>
        </div>
          <div className="card-body">
            <form>
              <h3>Username</h3>
              <input type="text" className="input-group-text" id="username-form" placeholder="Enter here"/>
              <h3>Password</h3>
              <input type="password" className="input-group-text" id="password-form" placeholder="Enter here"/>
              <br/>
              <input type="submit" className="btn btn-light" value="Submit"/>
            </form>
          </div>

    </div>
  );
}

export default Login;
