import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import NavLink from 'react-bootstrap/esm/NavLink'
import { NavLink } from "react-router-dom";

import "../styles/login.css"
import Cloud from "./Cloud";

function Login(props) {
  // Login in component will have to hit the server
  // Because will have to check if the username exists
  // make a local state to store username and
  // password from textboxes
  // Give initial state blank values
  const [user, setUser] = useState({
    username: " ",
    password: " ",
  });

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  //declare function to post to server
  const userLoggedIn = async () => {
    const response = await fetch("http://localhost:3001/login/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = response.json();
    console.log(result);
    return result;
  };

  //declare function that will call userLoggedIn function
  //When button clicked
  //if credentials exist, redirect them to weather page
  const handleLogin = async () => {
    let user = await userLoggedIn();
    if (user) {
      props.history.push("/weather");
    }
  };
  return (
    <div className="login-div">
      <div className="title-logo">
        <Cloud />
        <h3>Nimbus</h3>
      </div>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            class="input-sizing"
            type="username"
            placeholder="Enter email"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            class="input-sizing"
            type="password"
            placeholder="Password"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Button size="lg" className="button-color" variant="light" onClick={handleLogin}>
          <div className="button-text">Login</div>
        </Button>
      </Form>

      <p>
        Need an account?{" "}
        <NavLink to="/register">
          <span className="link">Sign Up</span>
        </NavLink>
      </p>
    </div>
  );
}

export default Login;
