import React, { useContext } from "react";
import City from "../city/City";
import "/Users/alejandrourroz/Desktop/hyf/React/project/hackyourweather/src/styles/search.css";
import { WeatherContext } from "/Users/alejandrourroz/Desktop/hyf/React/project/hackyourweather/src/context/WeatherContext";

const Search = ({ setISLoading }) => {
  const {
    fetchData,
    handleSearchButton,
    search,
    data,
    setData,
    error,
    welcome,
  } = useContext(WeatherContext);

  return (
    <div>
      <div>
        <h1>Weather</h1>
        <form className="search__bar" aria-label="form" onSubmit={fetchData}>
          <input
            name="search"
            type="text"
            placeholder="City Name..."
            className="search__value"
            onChange={handleSearchButton}
          />
          <button
            disabled={!search || search === data.map((item) => item.name)}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div>
        {welcome === false && (
          <h2>Find out the weather of your favorite cities!</h2>
        )}
        {data?.length > 0 ? (
          <City aria-label="city" data={data} setData={setData} />
        ) : (
          <h2>{error}</h2>
        )}
      </div>
    </div>
  );
};

export default Search;
