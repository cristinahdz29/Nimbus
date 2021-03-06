import { English, Spanish, French, Vietnamese, Chinese } from "../components/languages/languages";

const initialState = {
  weather: {
    isWeatherLoaded: false,
    dailyValues: [],
    hourlyValues: [],
  },
  favorites: {},
  strings: English,
  DateTimeLanguage: "en-us",
  apiLanguage: "en",
  tempUnitSymbol: "F",
  tempUnit: 'imperial',
  windSpeedUnits: 'mph'
};

// props.strings.feels_like

const dayjs = require("dayjs");

const reducer = (state = initialState, action) => {
  if (action.type == "ON_FETCHED_WEATHER") {
    const utcDate = new Date(action.payload.current.dt * 1000);
    const localDate = new Date(utcDate.toLocaleString());
    const dayOfWeek = new Intl.DateTimeFormat(state.DateTimeLanguage, {
      weekday: "long",
    }).format(localDate);
    const feels_like = Math.round(action.payload.current.feels_like);
    const humidity = action.payload.current.humidity;
    const temp = Math.round(action.payload.current.temp);
    const mainDescription = action.payload.current.weather[0].main;
    const description = action.payload.current.weather[0].description;
    const icon = action.payload.current.weather[0].icon;
    const wind_speed = action.payload.current.wind_speed;
    const clouds = action.payload.current.clouds;
    const uvi = action.payload.current.uvi;

    const utcDateSunrise = new Date(action.payload.current.sunrise * 1000);
    const localDateSunrise = new Date(utcDateSunrise.toLocaleString());
    const sunrise = dayjs(localDateSunrise).format("h:mm A");

    const utcDateSunset = new Date(action.payload.current.sunset * 1000);
    const localDateSunset = new Date(utcDateSunset.toLocaleString());
    const sunset = dayjs(localDateSunset).format("h:mm A");

    const dailyValues = action.payload.daily.map((day) => ({
      feels_like_day: day.feels_like.day,
      feels_like_night: day.feels_like.night,
      humidity: day.humidity,
      max_temp: Math.round(day.temp.max),
      min_temp: Math.round(day.temp.min),
      pop: Math.round(day.pop * 100),
      id: day.weather[0].id,
      mainDescription: day.weather[0].main,
      description: day.weather[0].description,
      icon: day.weather[0].icon,
      date_time: (() => {
        const utcDate = new Date(day.dt * 1000);
        const localDate = new Date(utcDate.toLocaleString());
        return new Intl.DateTimeFormat(state.DateTimeLanguage, {
          weekday: "long",
        }).format(localDate);
      })(),
      sunrise: (() => {
        const utcDate = new Date(day.sunrise * 1000);
        const localDate = new Date(utcDate.toLocaleString());
        return dayjs(localDate).format("h:mm A");
      })(),
      sunset: (() => {
        const utcDate = new Date(day.sunset * 1000);
        const localDate = new Date(utcDate.toLocaleString());
        return dayjs(localDate).format("h:mm A");
      })(),
    }));
    const hourlyValues = action.payload.hourly.map((hour) => ({
      date_time: (() => {
        const utcDate = new Date(hour.dt * 1000);
        const localDate = new Date(utcDate.toLocaleString());
        return dayjs(localDate).format("h A");
      })(),
      feels_like: hour.feels_like,
      humidity: hour.humidity,
      pop: Math.round(hour.pop * 100),
      temp: Math.round(hour.temp),
      id: hour.weather[0].id,
      mainDescription: hour.weather[0].main,
      description: hour.weather[0].description,
      icon: hour.weather[0].icon,
    }));
    return {
      ...state,
      weather: {
        dateTime: dayOfWeek,
        isWeatherLoaded: true,
        feels_like: feels_like,
        humidity: humidity,
        temp: temp,
        mainDescription: mainDescription,
        description: description,
        icon: icon,
        uvi: uvi,
        wind_speed: wind_speed,
        clouds: clouds,
        sunrise: sunrise,
        sunset: sunset,
        dailyValues: dailyValues,
        hourlyValues: hourlyValues,
        ...action.payload,
      },
    };
  }
  if (action.type == "ON_LANGUAGE") {
    if(action.payload == 'en') {
      return {
        ...state,
        strings: English,
        DateTimeLanguage: "en-us",
        apiLanguage: "en"
      };
    }
    if (action.payload == "es") {
      return {
        ...state,
        strings: Spanish,
        DateTimeLanguage: "es",
        apiLanguage: "es",
      };
    }
    if (action.payload == "fr") {
      return {
        ...state,
        strings: French,
        DateTimeLanguage: "fr",
        apiLanguage: "fr",
      };
    }
    if (action.payload == "vi") {
      return {
        ...state,
        strings: Vietnamese,
        DateTimeLanguage: "vi",
        apiLanguage: "vi",
      };
    }
    if (action.payload == "zh_cn") {
      return {
        ...state,
        strings: Chinese,
        DateTimeLanguage: "zh-cn",
        apiLanguage: "zh_cn",
      };
    }
  }
  if (action.type == 'ON_UNITS' ) {
    if(action.payload == "imperial") {
      return {
        ...state,
        tempUnitSymbol: "F",
        tempUnit: "imperial",
        windSpeedUnits: "mph",
      };
    }
    if (action.payload == 'metric') {
      return {
        ...state,
        tempUnitSymbol: "C",
        tempUnit: "metric",
        windSpeedUnits: "mps",
      };
    }
  }
  return state;
};

export default reducer;
