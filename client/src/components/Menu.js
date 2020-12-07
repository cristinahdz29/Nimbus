import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import { NavLink } from "react-router-dom";

function Menu() {
  // need a local state to store the city user entered in textbox
  // Give a blank initial value for the state
  const [city, setCity] = useState(" ");

  // function that saves what the user types in
  const handleChange = (e) => {
    setCity(e.target.value);
    
  };
  
  return (
    <div className="navbar-div">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/weather">Nimbus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <NavLink to="/user/favorites">Favorites</NavLink>
            <Nav.Link href="#link">Hourly Forecast</Nav.Link>
            <Nav.Link href="#link">7 Day Forecast</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Enter City"
              name="city"
              className="mr-sm-2"
              onChange={handleChange}
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      
      <h1>{city}</h1>
    </div>
  );
}

export default Menu;
