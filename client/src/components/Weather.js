import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'
import CurrentWeatherDetails from './CurrentWeatherDetails'

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
       let apiKey = `00b0dda3295804976daaf4ca564bdf04`;
       let apiURL = `https://api.openweathermap.org/data/2.5/onecall`;
        let response = await axios.get(apiURL, {
          params: {
            lat: latitude,
            lon: longitude,
            exclude: "minutely",
            appid: apiKey,
            units: "imperial",
          },
        });
        const result = response.data
        console.log(result)
        
        apiKey = "AIzaSyDHy8QmVO1C4nSFZhTo9KZZ24Py0IuHrY4";
        apiURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=locality&key=${apiKey}`;
        response = await axios.get(apiURL);
        const cityData = response.data;
        let city = cityData.results[0].formatted_address.split(',')[0];
        props.onFetchWeather({...result, city})
   }
    
   //setting up a weather object
   const currentWeatherValues = {
     //date: new Date(props.weather.current.dt * 1000),
    //  temp: Math.round(props.weather.current.temp),
    //  feelsLike: Math.round(props.weather.current.feels_like),
     //
   };

   console.log(currentWeatherValues.feelsLike)

    return (
      <div>
        {/* <h1>Weather Component</h1> */}
        {/* <h3>{props.weather.lat}</h3>
        {props.weather.isWeatherLoaded ? (
          <>
            <h3>{props.weather.city}</h3>
            <p>{props.weather.current.temp}</p>
          </>
        ) : (
          <p>"Loading..."</p>
        )} */}
        <CurrentWeather></CurrentWeather>
        <DailyWeather />
        <CurrentWeatherDetails />
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


export default connect(mapStateToProps, mapDispatchToProps)(Weather)