import React, { useState, useEffect } from "react";
import Menu from "../components/Menu"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import Footer from "./Footer";

function BaseLayout(props) {
  return (
    <div>
      <header><Menu {...props} ></Menu></header>
      {props.children}
      <Footer />
    </div>
  );
}

export default BaseLayout;
