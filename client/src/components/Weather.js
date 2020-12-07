import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

function Weather(props) {
    // make a local state to store weather object in
    // const [weather, setWeather] = useState({
    //     weather: {}
    // })
    // Will need to get current location coordinates
    // Will need to get coordinates based on a search
    // want to get the coordinates when the component mounts
    useEffect(() => {
        getLocation()
    }, [])

    function getLocation() {
       if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(showCurrentPosition)
       } 
   }

    const showCurrentPosition = async (position) => {
        console.log(position)
       let latitude = position.coords.latitude;
       let longitude = position.coords.longitude;
       console.log(latitude)
       console.log(longitude)
       const apiKey = `00b0dda3295804976daaf4ca564bdf04`;
       let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${apiKey}&units=imperial`;
        const response = await axios.get(apiURL)
        const result = response.data
        console.log(result)
        // setWeather(result)
        props.onFetchWeather(result)
   }
    

    return(
        <div>
            <h1>Weather Component</h1>
            <h3>{props.weather.lat}</h3>
        </div>
    )


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


export default connect(mapStateToProps, mapDispatchToProps)(Weather)