import React from "react";
import { connect } from "react-redux";
import "../styles/currentWeatherDetails.css";

function CurrentWeatherDetails(props) {
  return (
    <div className="current-weather-details-div">
      {/* <h2>Current Weather Box</h2> */}
      {props.weather.isWeatherLoaded ? (
        <>
          <div className="row-direction-div">
            <div className="details">
              <p className="label">{props.strings.feels_like}</p>
              <p className="value">
                {props.weather.feels_like} &deg;{props.tempUnitSymbol}
              </p>
            </div>

            <div className="details">
              <p className="label">{props.strings.humidity}</p>
              <p className="value">{props.weather.humidity} %</p>
            </div>
          </div>
          <div className="row-direction-div">
            <div className="details">
              <p className="label">{props.strings.sunrise}</p>
              <p className="value">{props.weather.sunrise}</p>
            </div>
            <div className="details">
              <p className="label">{props.strings.sunset}</p>
              <p className="value">{props.weather.sunset}</p>
            </div>
          </div>
          <div className="row-direction-div">
            <div className="details">
              <p className="label">{props.strings.cloudiness}</p>
              <p className="value">{props.weather.clouds} %</p>
            </div>
            <div className="details">
              <p className="label">{props.strings.wind_speed}</p>
              <p className="value">
                {props.weather.wind_speed} {props.windSpeedUnits}
              </p>
            </div>
          </div>
          <div className="details">
            <p className="label">{props.strings.uv_index}</p>
            <p className="value">{props.weather.uvi} / 10 </p>
          </div>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    strings: state.strings,
    tempUnit: state.tempUnit,
    tempUnitSymbol: state.tempUnitSymbol,
    windSpeedUnits: state.windSpeedUnits,
  };
};
export default connect(mapStateToProps)(CurrentWeatherDetails);
