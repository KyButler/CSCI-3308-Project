import { LinkContainer } from "react-router-bootstrap";
import React, {useEffect, useState} from "react";
import { Link, Switch, Redirect, Route, useHistory } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./App.css";
import Login from "./containers/Login";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup";
import Chat from "./containers/Chat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'

function App(props) {

  const[user,setUser] = useState(null);
  const[userChecked,setUserChecked] = useState(false);

  useEffect(() => {
    const fetchAuth = async () => {
      const response = await fetch('/api/auth', {
        method: 'get',
        headers: {'Content-Type': 'application/json'}
      });
      if (response.ok) {
        const text = await response.text();
        if (text) {
          setUser(JSON.parse(text));
        }
        setUserChecked(true);
      }
    }
    fetchAuth();
 }, []);

 const history = useHistory();

 async function handleLogout(event) {
   event.preventDefault();
   console.log("user clicked logout button");
   const response = await fetch('/api/auth', {
         method: 'delete',
         headers: {'Content-Type': 'application/json'}
       });
       if (response.ok) {
         setUser(null);
         history.push('/');
       } else {
         // cry about it
         // update global user state (working on the easiest way to do this)
       }
 }

  return userChecked ? (
    <div className="App">
      <Navbar bg="light" >
          <Navbar.Brand>
            <Link to="/">ChatApp</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

          {user ? (
            <Nav>
            <NavDropdown title={<span><FontAwesomeIcon icon={faUserCircle} /> {user.displayname}</span>} id="basic-nav-dropdown">

              <NavDropdown.Item onClick={handleLogout}>
                Logout
              </NavDropdown.Item>

            </NavDropdown>
          </Nav> ): (
            <Nav>
              <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/" exact render={props => <Home {...props} user={user}/>}/>
        <Route path="/login" exact render={props => user ? <Redirect to="/chat"/> : <Login {...props} setUser={setUser}/>}/>
        <Route path="/signup" exact render={props => user ? <Redirect to="/chat"/> : <Signup {...props} />} />
        <Route path="/chat" exact render={props => user ? <Chat {...props}/> : <Redirect to="/login"/>} />
        <Route component={NotFound} />
      </Switch>
    </div>
  ) : null;
}

export default App;
