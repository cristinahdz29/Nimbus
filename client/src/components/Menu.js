import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

function Menu(props) {
  // need a local state to store the city user entered in textbox
  // Give a blank initial value for the state
  const [city, setCity] = useState("miami");

  // function that saves what the user types in
  const handleChange = (e) => {
    setCity(e.target.value);
    
  };

  console.log(props)

  // use city in local state to get lat and lng with google maps API
  const getLatandLongByAddress = async () => {
    let formattedAddress = city.split(" ").join("+");
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&result_type=locality&key=AIzaSyDHy8QmVO1C4nSFZhTo9KZZ24Py0IuHrY4`;

    let response = await axios.get(url);
    let result = response.data
    let coordsObject = result.results[0].geometry.location;
    //console.log(coordsObject.lat)
    //console.log(coordsObject.lng)
    return coordsObject
    
  }

  // function to get weather from lat and long obtained from
  // getLatandLongByAddress function above
  // Will take in a lat and lng
  const getWeatherBySearch =  async (lat, lng) => {
     const apiKey = `00b0dda3295804976daaf4ca564bdf04`;
       let apiURL = `https://api.openweathermap.org/data/2.5/onecall`;
        const response = await axios.get(apiURL, {
          params: {
            lat: lat,
            lon: lng,
            exclude: "minutely",
            appid: apiKey,
            units: "imperial",
          },
        });
        const result = response.data
        console.log(result)
        props.onFetchWeather({ ...result, city })
        return result
  }


  const handleSearch = async () => {
    const locationObject =  await getLatandLongByAddress();
    console.log(locationObject)
    const weather = await getWeatherBySearch(locationObject.lat, locationObject.lng)
    console.log(weather)
  }


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
            <Button variant="outline-primary" onClick={handleSearch}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      
      {/* <h1>{city}</h1> */}
    </div>
  );
}

// Will need mapStateToProps because trying
// want to display parts of the global state
const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}

// will no longer need the local state because
// moving fetched API to redux global state
// will need DispatchToProps because trying 
// to update global state
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchWeather: (weather) => dispatch({type: 'ON_FETCHED_WEATHER', payload: weather})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
