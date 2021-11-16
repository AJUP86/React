import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [welcome, setWelcome] = useState(false);

  return (
    <WeatherContext.Provider
      value={{
        search,
        setSearch,
        data,
        setData,
        error,
        setError,
        welcome,
        setWelcome,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
