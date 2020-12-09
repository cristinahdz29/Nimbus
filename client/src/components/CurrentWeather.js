import React from "react";
import { connect } from "react-redux";
import '../styles/currentWeather.css'

function CurrentWeather(props) {
  return (
    <div className="current-weather-div">
      {/* <h2>Current Weather Box</h2> */}
      {props.weather.isWeatherLoaded ? (
        <>
          <h1 id="city">{props.weather.city}</h1>
          <h2>{props.weather.description}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`}
          ></img>
          <p id="temp">{props.weather.temp} &deg;F </p>
          {/* <p> Feels Like: {props.weather.feels_like} &deg;F </p>
          <p>💧 {props.weather.humidity} %</p>
          <p>
            {" "}
            🌝 {props.weather.sunrise} | 🌚 {props.weather.sunset}
          </p> */}
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
    return{
        weather: state.weather
    }
}

export default connect(mapStateToProps)(CurrentWeather);
