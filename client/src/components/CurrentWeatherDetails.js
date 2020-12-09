import React from 'react'
import { connect } from "react-redux";
import "../styles/currentWeatherDetails.css"

function CurrentWeatherDetails(props) {
  return (
    <div className="current-weather-details-div">
      {/* <h2>Current Weather Box</h2> */}
      {props.weather.isWeatherLoaded ? (
        <>
          <div className="details">
            <p className="label">FEELS LIKE</p>
            <p className="value">{props.weather.feels_like} &deg;F</p>
          </div>
          <div className="details">
            <p className="label">HUMIDITY</p>
            <p className="value">{props.weather.humidity} %</p>
          </div>
          <div className="details">
            <p className="label">SUNRISE</p>
            <p className="value">{props.weather.sunrise}</p>
          </div>
          <div className="details">
            <p className="label">SUNSET</p>
            <p className="value">{props.weather.sunset}</p>
          </div>
          <div className="details">
            <p className="label">CLOUDINESS</p>
            <p className="value">{props.weather.clouds} %</p>
          </div>
          <div className="details">
            <p className="label">WIND SPEED</p>
            <p className="value">{props.weather.wind_speed} mph</p>
          </div>
          <div className="details">
            <p className="label">UV INDEX</p>
            <p className="value">{props.weather.uvi} </p>
          </div>
        </>
      ) : (
        <p>"Loading..."</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};
export default connect(mapStateToProps)(CurrentWeatherDetails);