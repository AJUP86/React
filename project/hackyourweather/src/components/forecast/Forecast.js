import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
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
  const { cityId } = useParams();
  const [forecast, setForecast] = useState([]);
  const [chart, setChart] = useState([]);
  console.log(cityId);
  const fetchItems = async () => {
    const endPoint = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
    console.log(endPoint);
    try {
      const response = await fetch(endPoint);
      if (response.status >= 400) {
        throw new Error("Page not found");
      } else {
        const fiveDaysForecast = await response.json();
        setForecast(fiveDaysForecast.list);
        const chartData = forecast.map((item) => {
          const temp = item.main.temp;
          const dt = item.dt_txt;
          return { dt, temp };
        });
        setChart(chartData);
        console.log(`forecast ${forecast}`);
      }
    } catch (err) {
      setForecast([]);
      console.error(err.message);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <Link to="/">
        <button>5 day forecast </button>
      </Link>

      {forecast.length > 0 && (
        <AreaChart
          width={500}
          height={400}
          data={chart}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt" />
          <YAxis dataKey="temp" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="temp"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      )}
    </div>
  );
};

export default Forecast;
