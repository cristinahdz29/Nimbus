import React, { useState, useEffect } from "react";
import Menu from "../components/Menu"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"

function BaseLayout(props) {
  return (
    <div>
      <Menu {...props} ></Menu>
      {props.children}
      <footer>Footer</footer>
    </div>
  );
}

export default BaseLayout;
