import React from 'react'
import { connect } from "react-redux";
import "../styles/dailyWeather.css"

function DailyWeather(props) {
    console.log(props)
    // if (!props.weather.isWeatherLoaded) {
    //   return "";
    // }

    return (
      <div className="daily-main-div">
        {props.weather.dailyValues.map((day) => (
          <div className="day-div">
            <div className="weekday">
              <p>{day.date_time}</p>
            </div>
            <div className="icon">
              <img
                src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
              ></img>
            </div>
            <div className="pop-temp-flex">
              {day.id < 700 ? (<div className="pop">
              <p>{day.pop} %</p>
            </div>): ('')}
            
            <div className="temp">
              <p>
                <b>{day.max_temp} </b> | {day.min_temp}
              </p>
            </div>
            </div>
          </div>
        ))}
        {/* <div className="day-div">
          <div className="weekday">
            <p>Friday</p>
          </div>
          <div className="icon">
            <img src={"http://openweathermap.org/img/wn/10d@2x.png"}></img>
          </div>
          <div className="temp">
            <p>84 &deg;F</p>
          </div>
        </div>

        <div className="day-div">
          <div className="weekday">
            <p>Saturday</p>
          </div>
          <div className="icon">
            <img src={"http://openweathermap.org/img/wn/10d@2x.png"}></img>
          </div>
          <div className="temp">
            <p>84 &deg;F</p>
          </div>
        </div>

        <div className="day-div">
          <div className="weekday">
            <p>Sunday</p>
          </div>
          <div className="icon">
            <img src={"http://openweathermap.org/img/wn/10d@2x.png"}></img>
          </div>
          <div className="temp">
            <p>84 &deg;F</p>
          </div>
        </div> */}
      </div>
    );
}

// need to connect to redux global store to get weather values
const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}


export default connect(mapStateToProps)(DailyWeather)