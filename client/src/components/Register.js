import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import "../styles/register.css"
import Cloud from "./Cloud";

function Register(props) {
  // register component will have to hit the server
  // create a local state to store the username
  // and password
  const [user, setUser] = useState({
    username: " ",
    password: " ",
  });

  // make handleonChange function so
  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // function to create user in db
  // passing in username and passwords as args
  // come from the state
  // createUser function will then be called in
  // the handleSave function
  //  const createUser = () => {
  //     return fetch('http://localhost:3001/register/user', {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(user)
  //     }).then(response => response.json()).then(result => {
  //         console.log(result)
  //         return(result)
  //     })
  //  }

  const createUser = async () => {
    const response = await fetch("http://localhost:3001/register/user", {
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

  const handleSave = async () => {
    let savedUser = await createUser();
    if (savedUser) {
      props.history.push("/weather");
    }
  };

  return (
    <div className="register-div">
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

        <Button className="button-color" variant="light" onClick={handleSave}>
          <div className="button-text">Login</div>
        </Button>
      </Form>

      <p>
        Already have an account?{" "}
        <NavLink to="/">
          <span className="link">Sign In</span>
        </NavLink>
      </p>
    </div>

    // <div className="register-div">
    //   <h2>Register</h2>
    //   <Form>
    //     <Form.Group controlId="formBasicEmail">
    //       <Form.Label>Username</Form.Label>
    //       <Form.Control
    //         type="text"
    //         placeholder="Enter username"
    //         name="username"
    //         onChange={handleonChange}
    //       />
    //     </Form.Group>

    //     <Form.Group controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         placeholder="Password"
    //         name="password"
    //         onChange={handleonChange}
    //       />
    //     </Form.Group>
    //     <Button variant="primary" onClick={handleSave}>
    //       Register
    //     </Button>
    //   </Form>
    //   <p>
    //     Already have an account? <NavLink to="/">Sign in</NavLink>
    //   </p>
    // </div>
  );
}

export default Register;
