import React from 'react';
import './Login.css';

function Login() {
  return (
    <div class="card">
        <div class="card-header">
          <h1 class="chat-header">Name TBD</h1>
        </div>

        <div class="card-body">
          <form>
            <h3>Username</h3>
            <input type="text" class="input-group-text" id="username-form" placeholder="Enter here"/>
            <h3>Password</h3>
            <input type="password" class="input-group-text" id="password-form" placeholder="Enter here"/>
            <br/>
            <input type="submit" class="btn btn-light" value="Submit"/>
          </form>
        </div>
    </div>
  );
}

export default Login;
