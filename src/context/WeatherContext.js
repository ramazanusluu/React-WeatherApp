import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import citiesJSON from "../data/cities.json";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState(citiesJSON[43]);

  useEffect(() => {
    WeatherApi();
  }, [city]);

  const WeatherApi = async () => {
    const url = "https://api.openweathermap.org/data/2.5/";
    const key = "ffd5b4813a###################";
    const { data } = await axios.get(
      `${url}onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&exclude=current,minutely,hourly,alerts&lang=tr&appid=${key}`
    );
    setWeatherData(data.daily);
  };

  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  const date = new Date();
  let todayDate = date.toLocaleDateString();
  let getDay = date.getDay();
  let day;
  switch (getDay) {
    case 0:
      day = "Pazar";
      break;
    case 1:
      day = "Pazartesi";
      break;
    case 2:
      day = "Salı";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
      break;
    default:
      day = "";
  }
  const values = {
    city,
    setCity,
    citiesJSON,
    day,
    days,
    getDay,
    todayDate,
    weatherData,
    setWeatherData,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
export const useWeather = () => useContext(WeatherContext);
