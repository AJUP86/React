import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { WeatherContext } from "/Users/alejandrourroz/Desktop/hyf/React/project/hackyourweather/src/context/WeatherContext";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
const Forecast = () => {
  const { data } = useContext(WeatherContext);
  const [forecast, setForecast] = useState([]);
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);
  console.log(data[0].name);
  const fetchItems = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${data[0].name}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    );
    const fiveDaysForecast = await response.json();
    setForecast([fiveDaysForecast.list]);
    console.log(forecast);
  };

  return (
    <div>
      <Link to="/">
        <button>5 day forecast </button>
        {forecast.length > 0 &&
          forecast.map((item) => {
            return (
              <ResponsiveContainer width={750} height={300}>
                <AreaChart data={[{ date: item.dt_txt }]}></AreaChart>
              </ResponsiveContainer>
            );
          })}
      </Link>
    </div>
  );
};

export default Forecast;
