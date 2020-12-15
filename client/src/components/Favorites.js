import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "../styles/favorites.css";
import { connect } from "react-redux";
import "../images/rainsvg.png"

function Favorites(props) {
  // create a local state
  // to capture city search
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder={props.strings.city_zip}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-info">{props.strings.add}</Button>
        </InputGroup.Append>
      </InputGroup>

      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <div className="favorite-div">
              <p>City Name</p> <p>Temp &deg;F</p>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Temperature Details</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <div className="favorite-div">
              <p>City Name</p> <p>Temp &deg;F</p>
             
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Temperature Details</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    strings: state.strings
  };
};

export default connect(mapStateToProps)(Favorites);
