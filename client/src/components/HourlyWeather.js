import React from 'react'
import { connect } from 'react-redux'
import "../styles/hourlyWeather.css"


function HourlyWeather(props) {
  
  return (
    <div className="hourly-main-div">
      {props.weather.hourlyValues.map((hour) => (
        <div className="hour-div">
          <div className="hour">
            <p>{hour.date_time}</p>
          </div>
          <div className="hour-icon">
            <img
              src={`http://openweathermap.org/img/wn/${hour.icon}@2x.png`}
            ></img>
          </div>
          <div className="hour-temp">
            <p>
              <b>{hour.temp} </b> 
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps)(HourlyWeather)