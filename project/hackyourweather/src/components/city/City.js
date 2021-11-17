import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "/Users/alejandrourroz/Desktop/hyf/React/project/hackyourweather/src/styles/city.css";
import { WeatherContext } from "/Users/alejandrourroz/Desktop/hyf/React/project/hackyourweather/src/context/WeatherContext";
const City = ({ data }) => {
  const { deleteCity, pageIsLoading, isLoading } = useContext(WeatherContext);
  return (
    <ul>
      {data.map((city, index) => {
        let weatherDescription = "";
        const description = city.weather[0].description.replace(" ", "__");
        weatherDescription = `description__${description}`;
        return (
          <li key={index} data-testid={`city-element-${index}`}>
            <Link to={`/${city.id}`} onClick={pageIsLoading}>
              <div className={weatherDescription}>
                <h1 className="city__name">{`${city.name}, ${city.sys.country}`}</h1>
                <div className="weather__info">
                  <h2>{city.weather[0].main}</h2>
                  <p>{city.weather[0].description}</p>
                </div>
                <div className="temp__info">
                  <p>{`max temp: ${(city.main.temp_max - 273.15).toFixed(
                    2
                  )} C`}</p>
                  <p>{`min temp: ${(city.main.temp_min - 273.15).toFixed(
                    2
                  )} C`}</p>
                </div>
                <div className="city__coords">
                  <p>{`location: ${city.coord.lon}, ${city.coord.lat}`}</p>
                </div>
              </div>
            </Link>
            <button
              className="clear__button"
              onClick={() => {
                deleteCity(city.id);
              }}
            >
              X
            </button>
          </li>
        );
      })}
      {isLoading && <h2>Loading...</h2>}
    </ul>
  );
};
export default City;
