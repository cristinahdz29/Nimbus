import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import { NavLink } from 'react-router-dom'


function Menu() {
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
            <FormControl type="text" placeholder="Enter City" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
