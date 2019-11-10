import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="Home">
      <div className="lander">
        <h1>{props.user ? <Link to='/chat'> Chat </Link> : "Chat"}</h1>
        <p>A chat app</p>
      </div>
    </div>
  );
}
