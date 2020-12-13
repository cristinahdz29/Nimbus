import React from 'react'
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import FormControl from 'react-bootstrap/FormControl'
import "../styles/favorites.css"

function Favorites() {

    // create a local state
    // to capture city search
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="City or zip code"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-info">Add</Button>
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

export default Favorites